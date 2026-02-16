import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password)
      return alert("All fields required");

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find((u) => u.email === email))
      return alert("User already exists");

    users.push({ name, email, password });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful");
    navigate("/login");
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 mx-auto" style={{ maxWidth: "400px" }}>
        <h3 className="text-center">Create Account</h3>

        <form onSubmit={handleRegister}>

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn btn-success w-100">
            Register
          </button>

        </form>

        <div className="text-center mt-3">
          <small>
            Already have account?{" "}
            <span
              style={{ cursor: "pointer", color: "blue" }}
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </small>
        </div>
      </div>
    </div>
  );
}

export default Register;
