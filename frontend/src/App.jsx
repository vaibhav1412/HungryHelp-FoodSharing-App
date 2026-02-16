import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";

function App() {
  const user = JSON.parse(localStorage.getItem("user") || "null");

  return (
    <BrowserRouter>

      {user && <Navbar />}

      <Routes>
        <Route path="/" element={<SplashScreen />} />

        <Route
          path="/login"
          element={user ? <Navigate to="/home" /> : <Login />}
        />

        <Route
          path="/register"
          element={user ? <Navigate to="/home" /> : <Register />}
        />

        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="/login" />}
        />

        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to="/login" />}
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
