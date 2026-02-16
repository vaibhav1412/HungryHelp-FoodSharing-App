function Navbar() {
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  const handleRoleChange = (role) => {
    const updated = { ...user, activeRole: role };
    localStorage.setItem("user", JSON.stringify(updated));
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-dark bg-success px-4">
      <span className="navbar-brand">HungryHelp</span>

      <div className="d-flex gap-3 align-items-center">

        <select
          className="form-select"
          style={{ width: "150px" }}
          value={user?.activeRole}
          onChange={(e) => handleRoleChange(e.target.value)}
        >
          {user?.roles.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>

        <button
          className="btn btn-light btn-sm"
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
