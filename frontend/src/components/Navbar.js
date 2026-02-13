import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success px-4">
      <Link className="navbar-brand" to="/">
        HungryHelp
      </Link>

      <div>
        {!user ? (
          <>
            <Link className="btn btn-light me-2" to="/">
              Login
            </Link>
            <Link className="btn btn-warning" to="/register">
              Register
            </Link>
          </>
        ) : (
          <button
            className="btn btn-danger"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;