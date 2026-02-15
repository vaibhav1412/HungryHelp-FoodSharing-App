function Navbar() {
  const user = JSON.parse(localStorage.getItem("user") || "null");

  if (!user) return null;

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  const handleRoleSwitch = (role) => {
    const updatedUser = { ...user, activeRole: role };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    window.location.href = "/dashboard";
  };

  return (
    <nav className="navbar navbar-dark bg-success px-4">
      <span
        className="navbar-brand"
        style={{ cursor: "pointer" }}
        onClick={() => (window.location.href = "/home")}
      >
        HungryHelp
      </span>

      <div className="d-flex align-items-center gap-3">

        <button
          className="btn btn-light btn-sm"
          onClick={() => (window.location.href = "/home")}
        >
          Home Feed
        </button>

        <button
          className="btn btn-warning btn-sm"
          onClick={() => (window.location.href = "/leaderboard")}
        >
          Leaderboard
        </button>

        <select
          className="form-select"
          style={{ width: "150px" }}
          value={user.activeRole}
          onChange={(e) => handleRoleSwitch(e.target.value)}
        >
          {user.roles.map((r) => (
            <option key={r} value={r}>
              {r.toUpperCase()}
            </option>
          ))}
        </select>

        <button
          className="btn btn-info btn-sm"
          onClick={() => (window.location.href = "/profile")}
        >
          Profile
        </button>

        <button
          className="btn btn-danger btn-sm"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>
    </nav>
  );
}

export default Navbar;
