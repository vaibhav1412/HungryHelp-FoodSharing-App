import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      const user = JSON.parse(localStorage.getItem("user") || "null");

      if (user) {
        navigate("/home");
      } else {
        navigate("/login");
      }
    }, 1500);
  }, [navigate]);

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <h2>HungryHelp Loading...</h2>
    </div>
  );
}

export default SplashScreen;
