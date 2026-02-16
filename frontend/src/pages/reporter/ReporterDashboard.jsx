import { useState, useContext } from "react";
import { FeedContext } from "../../context/FeedContext";

function ReporterDashboard() {
  const { addPost } = useContext(FeedContext);
  const user = JSON.parse(localStorage.getItem("user"));

  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = () => {
    if (!description || !location)
      return alert("All fields required");

    addPost({
      id: Date.now(),
      description,
      location,
      reporter: user.email,
      donor: null,
      volunteer: null,
      status: "OPEN"
    });

    setDescription("");
    setLocation("");
    alert("Request Posted!");
  };

  return (
    <div className="container mt-4">
      <h2>Reporter Dashboard</h2>

      <div className="card p-4 shadow-sm mt-3">
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <textarea
          className="form-control mb-3"
          placeholder="Describe food need..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Post Request
        </button>
      </div>
    </div>
  );
}

export default ReporterDashboard;
