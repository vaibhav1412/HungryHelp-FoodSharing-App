import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !role) return alert("All fields required");

    localStorage.setItem(
      "user",
      JSON.stringify({
        email,
        name: email.split("@")[0],
        activeRole: role,
        roles: ["donor", "reporter", "volunteer"]
      })
    );

    window.location.href = "/home";
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 mx-auto" style={{ maxWidth: "400px" }}>
        <h3 className="text-center">Login</h3>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <select
            className="form-select mb-3"
            onChange={(e) => setRole(e.target.value)}
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
      </div>
    </div>
  );
}

export default Login;
