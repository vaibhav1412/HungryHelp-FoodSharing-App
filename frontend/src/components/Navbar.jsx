import { useNavigate } from "react-router-dom";

function Navbar({ user, setUser }) {
  const navigate = useNavigate();

  if (!user) return null;

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  const handleRoleChange = (role) => {
    const updatedUser = { ...user, activeRole: role };

    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    navigate("/home");
  };

  return (
    <nav className="navbar navbar-dark bg-success px-4">
      <span
        className="navbar-brand"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/home")}
      >
        HungryHelp
      </span>

      <div className="d-flex gap-3 align-items-center">

        <select
          className="form-select"
          style={{ width: "160px" }}
          value={user.activeRole}
          onChange={(e) => handleRoleChange(e.target.value)}
        >
          {user.roles && user.roles.length > 0 ? (
            user.roles.map((r) => (
              <option key={r} value={r}>
                {r.toUpperCase()}
              </option>
            ))
          ) : (
            <option>No Roles</option>
          )}
        </select>

        <button
          className="btn btn-info btn-sm"
          onClick={() => navigate("/feed")}
        >
          Feed
        </button>
        
        <button
          className="btn btn-light btn-sm"
          onClick={() => navigate("/profile")}
        >
          Profile
        </button>

        <button
          className="btn btn-warning btn-sm"
          onClick={() => navigate("/leaderboard")}
        >
          Leaderboard
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
