import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import SplashScreen from "./pages/SplashScreen.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Assignments from "./pages/Assignments.jsx";
import AssignmentDetails from "./pages/AssignmentDetails.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Splash Screen */}
        <Route
          path="/"
          element={<SplashScreen />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Register */}
        <Route
          path="/register"
          element={<Register />}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* Assignments */}
        <Route
          path="/assignments"
          element={<Assignments />}
        />

        {/* Assignment Details */}
        <Route
          path="/assignments/:id"
          element={<AssignmentDetails />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;