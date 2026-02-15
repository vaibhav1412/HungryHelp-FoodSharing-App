import { useState, useContext } from "react";
import { FeedContext } from "../../context/FeedContext";

function ReporterDashboard() {
  const { addPost } = useContext(FeedContext);
  const user = JSON.parse(localStorage.getItem("user"));

  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = () => {
    if (!description || !location) {
      alert("All fields required");
      return;
    }

    addPost({
      id: Date.now(),
      description,
      location,
      image,
      reporter: user.email,
      donor: null,
      volunteer: null,
      volunteerRequired: false,
      completionImage: null,
      status: "OPEN"
    });

    setDescription("");
    setLocation("");
    setImage(null);
  };

  return (
    <div className="container mt-4">
      <h2>Reporter Section</h2>

      <div className="card p-4 shadow-sm">

        <input
          type="file"
          className="form-control mb-3"
          onChange={(e) =>
            setImage(URL.createObjectURL(e.target.files[0]))
          }
        />

        <input
          type="text"
          placeholder="Enter Location"
          className="form-control mb-3"
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
