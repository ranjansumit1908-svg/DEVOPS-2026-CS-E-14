const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

// Register

exports.register = async (req, res) => {

    try {

        const { name, username, password } = req.body;

        const existingUser = await User.findOne({ username });

        if (existingUser) {

            return res.status(400).json({
                message: "Username already exists"
            });

        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({

            name,
            username,
            password: hashedPassword

        });

        res.status(201).json({

            message: "Registration Successful",
            user: {

                id: newUser._id,
                name: newUser.name,
                username: newUser.username

            }

        });

    }

    catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};


// Login

exports.login = async (req, res) => {

    try {

        const { username, password } = req.body;

        const user = await User.findOne({ username });

        if (!user) {

            return res.status(400).json({

                message: "Invalid Username"

            });

        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {

            return res.status(400).json({

                message: "Invalid Password"

            });

        }

        const token = generateToken(user._id);

        res.json({

            token,

            user: {

                id: user._id,
                name: user.name,
                username: user.username

            }

        });

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};


// Profile

exports.profile = async (req, res) => {

    try {

        const user = await User.findById(req.user.id).select("-password");

        res.json(user);

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};