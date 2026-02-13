import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.role) {
      newErrors.role = "Please select a role";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      localStorage.setItem("user", JSON.stringify(formData));
      navigate(`/${formData.role}`);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow-lg p-4 rounded-4">
            <h3 className="text-center text-success mb-4">
              HungryHelp Login
            </h3>

            <form onSubmit={handleSubmit}>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className={`form-control ${
                    errors.email ? "is-invalid" : ""
                  }`}
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className="invalid-feedback">
                    {errors.email}
                  </div>
                )}
              </div>

              {/* Password */}
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <div className="invalid-feedback">
                    {errors.password}
                  </div>
                )}
              </div>

              {/* Role */}
              <div className="mb-4">
                <label className="form-label fw-semibold">
                  Select Role
                </label>
                <select
                  name="role"
                  className={`form-select ${
                    errors.role ? "is-invalid" : ""
                  }`}
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option value="">Choose Role</option>
                  <option value="donor">Donor</option>
                  <option value="reporter">Reporter</option>
                  <option value="volunteer">Volunteer</option>
                  <option value="admin">Admin</option>
                </select>
                {errors.role && (
                  <div className="invalid-feedback">
                    {errors.role}
                  </div>
                )}
              </div>

              {/* Button */}
              <button
                type="submit"
                className="btn btn-success w-100 py-2 fw-semibold"
              >
                Login
              </button>

            </form>

            <div className="text-center mt-3">
              <small>
                Don't have an account?{" "}
                <span
                  className="text-success fw-semibold"
                  style={{ cursor: "pointer" }}
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
