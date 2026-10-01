import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import SplashScreen from "./pages/SplashScreen.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Assignments from "./pages/Assignments.jsx";
import AssignmentDetails from "./pages/AssignmentDetails.jsx";

// Only logged-in users (valid token in localStorage) can open these pages
function ProtectedRoute({ children }) {
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

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
          element={<ProtectedRoute><Dashboard /></ProtectedRoute>}
        />

        {/* Assignments */}
        <Route
          path="/assignments"
          element={<ProtectedRoute><Assignments /></ProtectedRoute>}
        />

        {/* Assignment Details */}
        <Route
          path="/assignments/:id"
          element={<ProtectedRoute><AssignmentDetails /></ProtectedRoute>}
        />

        {/* Unknown URL */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;