import React, { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password || !formData.role) {
      alert("All fields required");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify({
        email: formData.email,
        activeRole: formData.role,
        roles: ["donor", "reporter", "volunteer"]
      })
    );

    window.location.href = "/dashboard";
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow mx-auto" style={{ maxWidth: "400px" }}>
        <h3 className="mb-3 text-center">Login</h3>

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

          <select
            className="form-select mb-3"
            onChange={(e) =>
              setFormData({ ...formData, role: e.target.value })
            }
          >
            <option value="">Select Role</option>
            <option value="donor">Donor</option>
            <option value="reporter">Reporter</option>
            <option value="volunteer">Volunteer</option>
          </select>

          <button className="btn btn-success w-100">
            Login
          </button>
        </form>

        {/* Create Account Link */}
        <div className="text-center mt-3">
          <small>
            New user?{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => (window.location.href = "/register")}
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
