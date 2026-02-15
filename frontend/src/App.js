import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import SplashScreen from "./pages/SplashScreen";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import DashboardRouter from "./pages/DashboardRouter";
import Feed from "./pages/Feed";
import HomeFeed from "./pages/HomeFeed";
import Leaderboard from "./pages/Leaderboard";
import Profile from "./pages/Profile";


function App() {
  const user = JSON.parse(localStorage.getItem("user") || "null");

  return (
    <BrowserRouter>
      {user && <Navbar />}

      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={user ? <DashboardRouter /> : <Navigate to="/login" />}
        />

        <Route
          path="/feed"
          element={user ? <Feed /> : <Navigate to="/login" />} 
        />
        <Route path="/home" element={<HomeFeed />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/profile" element={<Profile />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
