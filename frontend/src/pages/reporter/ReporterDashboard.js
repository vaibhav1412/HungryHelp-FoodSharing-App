import { useState, useContext } from "react";
import Layout from "../../components/Layout";
import { FeedContext } from "../../context/FeedContext";

function ReporterDashboard() {
  const { addPost } = useContext(FeedContext);
  const user = JSON.parse(localStorage.getItem("user"));

  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = () => {
    if (!description) return alert("Description required");

    addPost({
      id: Date.now(),
      description,
      image,
      reporter: user.email,
      status: "open"
    });

    setDescription("");
    setImage(null);
  };

  return (
    <Layout>
      <h2 className="mb-4">Reporter Dashboard</h2>

      <div className="card p-4 shadow-sm">

        <input
          type="file"
          className="form-control mb-3"
          onChange={(e) =>
            setImage(URL.createObjectURL(e.target.files[0]))
          }
        />

        <textarea
          className="form-control mb-3"
          placeholder="Describe food need..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="btn btn-primary" onClick={handleSubmit}>
          Post Request
        </button>

      </div>
    </Layout>
  );
}

export default ReporterDashboard;
