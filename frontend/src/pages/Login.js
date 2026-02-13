import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password || !role) {
      alert("Please fill all fields");
      return;
    }

    // Temporary fake authentication (backend later)
    const userData = {
      email,
      role
    };

    localStorage.setItem("user", JSON.stringify(userData));

    // Navigate based on role
    navigate(`/${role}`);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow p-4">
            <h3 className="text-center mb-4 text-success">
              HungryHelp Login
            </h3>

            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Select Role</label>
                <select
                  className="form-select"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="">Choose Role</option>
                  <option value="donor">Donor</option>
                  <option value="reporter">Reporter</option>
                  <option value="volunteer">Volunteer</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn btn-success w-100"
              >
                Login
              </button>
            </form>

            <div className="text-center mt-3">
              <small>
                Don't have an account?{" "}
                <span
                  style={{ cursor: "pointer", color: "green" }}
                  onClick={() => navigate("/register")}
                >
                  Register
                </span>
              </small>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
