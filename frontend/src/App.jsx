import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import SplashScreen from "./pages/SplashScreen";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Leaderboard from "./pages/Leaderboard";
import Navbar from "./components/Navbar";
import Feed from "./pages/Feed";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <BrowserRouter>

      {user && <Navbar user={user} setUser={setUser} />}

      <Routes>
        <Route path="/" element={<SplashScreen />} />

        <Route
          path="/login"
          element={!user ? <Login setUser={setUser} /> : <Navigate to="/home" />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="/login" />}
        />

        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to="/login" />}
        />

        <Route
          path="/leaderboard"
          element={user ? <Leaderboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/feed"
          element={user ? <Feed /> : <Navigate to="/login" />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
