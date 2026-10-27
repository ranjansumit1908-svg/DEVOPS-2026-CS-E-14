const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

const ROLES = ["student", "teacher"];

const publicUser = (user) => ({
    id: user._id,
    name: user.name,
    username: user.username,
    role: user.role
});

// Register
exports.register = async (req, res) => {
    try {
        const { name, password, role = "student" } = req.body;
        const username = String(req.body.username || "").trim().toLowerCase();

        if (!name || !username || !password) {
            return res.status(400).json({ message: "Name, username and password are required" });
        }

        if (String(password).length < 6) {
            return res.status(400).json({ message: "Password must contain at least 6 characters" });
        }

        if (!ROLES.includes(role)) {
            return res.status(400).json({ message: "Role must be student or teacher" });
        }

        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.status(400).json({ message: "Username already exists" });
        }

        const hashedPassword = await bcrypt.hash(String(password), 10);

        const newUser = await User.create({
            name: String(name).trim(),
            username,
            password: hashedPassword,
            role
        });

        res.status(201).json({
            message: "Registration Successful",
            user: publicUser(newUser)
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Login
exports.login = async (req, res) => {
    try {
        const { password, role } = req.body;
        const username = String(req.body.username || "").trim().toLowerCase();

        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required" });
        }

        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json({ message: "Invalid Username" });
        }

        const isMatch = await bcrypt.compare(String(password), user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Password" });
        }

        if (role && role !== user.role) {
            return res.status(403).json({
                message: `This account is registered as a ${user.role}. Please select the ${user.role} role.`
            });
        }

        res.json({
            token: generateToken(user._id, user.role),
            user: publicUser(user)
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Profile
exports.profile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
