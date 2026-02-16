import { useState, useContext } from "react";
import { FeedContext } from "../../context/FeedContext";

function ReporterDashboard() {
  const { addPost } = useContext(FeedContext);
  const user = JSON.parse(localStorage.getItem("user"));

  const [desc, setDesc] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result);
    reader.readAsDataURL(file);
  };

  const handlePost = () => {
    if (!desc || !location)
      return alert("Fill all fields");

    addPost({
      id: Date.now(),
      description: desc,
      locationName: location,
      image: image,
      reporter: user.email,
      donor: null,
      volunteer: null,
      completionImage: null,
      volunteerNeeded: false,
      status: "OPEN",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });

    setDesc("");
    setLocation("");
    setImage(null);
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "650px" }}>
      <h4>Create Food Request</h4>

      <div className="card p-3 shadow-sm">

        <input
          className="form-control mb-2"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <textarea
          className="form-control mb-2"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <input
          type="file"
          className="form-control mb-3"
          accept="image/*"
          onChange={handleImage}
        />

        <button
          className="btn btn-success"
          onClick={handlePost}
        >
          Post Request
        </button>

      </div>
    </div>
  );
}

export default ReporterDashboard;
