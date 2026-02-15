import { useContext, useState } from "react";
import { FeedContext } from "../../context/FeedContext";

function VolunteerSection() {
  const { posts, updatePost } = useContext(FeedContext);
  const user = JSON.parse(localStorage.getItem("user"));

  const [selectedPost, setSelectedPost] = useState(null);
  const [completionImage, setCompletionImage] = useState(null);

  const requiredPosts = posts.filter(
    (post) => post.status === "VOLUNTEER_REQUIRED"
  );

  const acceptedPosts = posts.filter(
    (post) =>
      post.status === "VOLUNTEER_ACCEPTED" &&
      post.volunteer === user.email
  );

  const handleAccept = (post) => {
    updatePost(post.id, {
      status: "VOLUNTEER_ACCEPTED",
      volunteer: user.email
    });
  };

  const handleComplete = () => {
    if (!completionImage) {
      alert("Upload proof image");
      return;
    }

    updatePost(selectedPost.id, {
      status: "COMPLETED",
      completionImage: completionImage
    });

    setSelectedPost(null);
    setCompletionImage(null);
  };

  return (
    <div className="container mt-4">
      <h2>Volunteer Section</h2>

      <h5 className="mt-4">Requests</h5>
      {requiredPosts.map((post) => (
        <div key={post.id} className="card mb-3 p-3">
          <p>{post.description}</p>
          <button
            className="btn btn-primary"
            onClick={() => handleAccept(post)}
          >
            Accept
          </button>
        </div>
      ))}

      <h5 className="mt-4">Your Deliveries</h5>
      {acceptedPosts.map((post) => (
        <div key={post.id} className="card mb-3 p-3">
          <p>{post.description}</p>
          <button
            className="btn btn-success"
            onClick={() => setSelectedPost(post)}
          >
            Complete Delivery
          </button>
        </div>
      ))}

      {selectedPost && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ background: "rgba(0,0,0,0.6)" }}
        >
          <div className="bg-white p-4 rounded shadow">
            <h5>Upload Proof</h5>

            <input
              type="file"
              accept="image/*"
              capture="environment"
              className="form-control mb-3"
              onChange={(e) =>
                setCompletionImage(
                  URL.createObjectURL(e.target.files[0])
                )
              }
            />

            <button
              className="btn btn-success w-100"
              onClick={handleComplete}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default VolunteerSection;
