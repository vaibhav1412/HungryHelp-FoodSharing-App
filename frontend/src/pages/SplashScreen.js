import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-dark text-white">

      <img
        src={logo}
        alt="HungryHelp Logo"
        style={{ width: "180px" }}
        className="mb-4"
      />

      <h2 className="fw-bold text-info">
        HungryHelp
      </h2>

      <p className="mt-2 text-center px-3" style={{ maxWidth: "400px" }}>
        “Sharing food is sharing love —  
        Together we can end hunger and reduce food waste.”
      </p>

      <div className="spinner-border text-info mt-4" role="status"></div>

    </div>
  );
}

export default SplashScreen;
