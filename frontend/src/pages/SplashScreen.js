import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className="vh-100 d-flex flex-column justify-content-center align-items-center text-white"
      style={{
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)"
      }}
    >
      {/* Animated Logo */}
      <motion.img
        src={logo}
        alt="HungryHelp Logo"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          width: "160px",
          filter: "drop-shadow(0px 0px 15px #00bfff)"
        }}
      />

      {/* App Name */}
      <motion.h1
        className="mt-4 fw-bold"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{ letterSpacing: "2px" }}
      >
        HungryHelp
      </motion.h1>

      {/* Tagline */}
      <motion.p
        className="mt-3 text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{ maxWidth: "420px", fontSize: "15px" }}
      >
        “No food should go to waste when someone sleeps hungry.  
        Together we connect hearts, meals, and hope.”
      </motion.p>

      {/* Premium Loader */}
      <motion.div
        className="mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="spinner-grow text-info mx-1"></div>
        <div className="spinner-grow text-light mx-1"></div>
        <div className="spinner-grow text-info mx-1"></div>
      </motion.div>
    </div>
  );
}

export default SplashScreen;
