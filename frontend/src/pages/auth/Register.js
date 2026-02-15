import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("All fields required");
      return;
    }

    alert("Account created successfully!");

    window.location.href = "/login";
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow mx-auto" style={{ maxWidth: "400px" }}>
        <h3 className="mb-3 text-center">Create Account</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="form-control mb-3"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="form-control mb-3"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />

          <button className="btn btn-primary w-100">
            Register
          </button>
        </form>

        {/* Login Link */}
        <div className="text-center mt-3">
          <small>
            Already have an account?{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => (window.location.href = "/login")}
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
