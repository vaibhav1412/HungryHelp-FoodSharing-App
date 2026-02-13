import React from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleRegister = (role) => {
    // Temporary navigation (backend later)
    navigate(`/${role}`);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">HungryHelp Register</h2>

      <div className="card p-4 shadow">
        <input className="form-control mb-2" placeholder="Full Name" />
        <input className="form-control mb-2" placeholder="Email" />
        <input type="password" className="form-control mb-3" placeholder="Password" />

        <button onClick={() => handleRegister("donor")} className="btn btn-success mb-2">
          Register as Donor
        </button>

        <button onClick={() => handleRegister("reporter")} className="btn btn-primary mb-2">
          Register as Reporter
        </button>

        <button onClick={() => handleRegister("volunteer")} className="btn btn-warning mb-2">
          Register as Volunteer
        </button>
      </div>
    </div>
  );
}

export default Register;
