import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

const handleLogin = (e) => {
  e.preventDefault();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const existingUser = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!existingUser) {
    return alert("Invalid credentials");
  }

  const userData = {
    name: existingUser.name,
    email: existingUser.email,
    activeRole: role,
    roles: ["reporter", "donor", "volunteer"]
  };

  localStorage.setItem("user", JSON.stringify(userData));

  setUser(userData);   // 🔥 THIS IS CRITICAL

  navigate("/home");
};


  return (
    <div className="container mt-5">
      <div className="card p-4 mx-auto shadow" style={{ maxWidth: "400px" }}>
        <h3 className="text-center mb-4">Login</h3>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <select
            className="form-select mb-3"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select Role</option>
            <option value="reporter">Reporter</option>
            <option value="donor">Donor</option>
            <option value="volunteer">Volunteer</option>
          </select>

          <button className="btn btn-success w-100">
            Login
          </button>

        </form>

        <div className="text-center mt-3">
          <small>
            New user?{" "}
            <span
              style={{ cursor: "pointer", color: "blue" }}
              onClick={() => navigate("/register")}
            >
              Create Account
            </span>
          </small>
        </div>
      </div>
    </div>
  );
}

export default Login;
