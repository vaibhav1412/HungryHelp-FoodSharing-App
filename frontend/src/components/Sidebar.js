import { Link } from "react-router-dom";

function Sidebar({ role }) {
  return (
    <div
      className="bg-dark text-white p-4"
      style={{ width: "230px", minHeight: "100vh" }}
    >
      <h4 className="mb-4 text-info">HungryHelp</h4>

      <ul className="list-unstyled">
        <li className="mb-3">
          <Link className="text-white text-decoration-none" to={`/${role}`}>
            Dashboard
          </Link>
        </li>

        {role === "donor" && (
          <li className="mb-3">
            <Link className="text-white text-decoration-none" to="#">
              Add Donation
            </Link>
          </li>
        )}

        {role === "volunteer" && (
          <li className="mb-3">
            <Link className="text-white text-decoration-none" to="#">
              Nearby Requests
            </Link>
          </li>
        )}

        {role === "admin" && (
          <li className="mb-3">
            <Link className="text-white text-decoration-none" to="#">
              Manage Users
            </Link>
          </li>  
        )}
        <li className="mb-3">
        <Link className="text-white text-decoration-none" to="/feed">
            Feed
        </Link>
</li>

      </ul>
    </div>
  );
}

export default Sidebar;
