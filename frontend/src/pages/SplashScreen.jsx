import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      const user = JSON.parse(localStorage.getItem("user") || "null");
      if (user) navigate("/home");
      else navigate("/login");
    }, 2500);
  }, [navigate]);

  return (
    <div
      className="vh-100 d-flex flex-column justify-content-center align-items-center text-white"
      style={{
        background: "linear-gradient(135deg,#0f2027,#203a43,#2c5364)"
      }}
    >
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="fw-bold"
      >
        HungryHelp
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-3 text-center"
        style={{ maxWidth: "400px" }}
      >
        “No food should go to waste when someone sleeps hungry.”
      </motion.p>

      <motion.div
        className="mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="spinner-border text-light"></div>
      </motion.div>
    </div>
  );
}

export default SplashScreen;
