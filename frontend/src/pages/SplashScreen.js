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
      <motion.img
        src={logo}
        alt="HungryHelp"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          width: "160px",
          filter: "drop-shadow(0px 0px 20px #00bfff)"
        }}
      />

      <motion.h1
        className="mt-4 fw-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 1 }}
      >
        HungryHelp
      </motion.h1>

      <motion.p
        className="mt-3 text-center px-4"
        style={{ maxWidth: "420px" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        “No food should go to waste when someone sleeps hungry.”
      </motion.p>

      <motion.div
        className="mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="spinner-grow text-info mx-1"></div>
        <div className="spinner-grow text-light mx-1"></div>
        <div className="spinner-grow text-info mx-1"></div>
      </motion.div>
    </div>
  );
}

export default SplashScreen;
