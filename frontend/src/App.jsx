import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import SplashScreen from "./pages/SplashScreen.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";

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

        {/* Register / Sign Up */}
        <Route
          path="/register"
          element={<Register />}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;