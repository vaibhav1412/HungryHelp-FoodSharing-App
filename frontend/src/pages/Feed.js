import { useContext, useState } from "react";
import { FeedContext } from "../context/FeedContext";

function Feed() {
  const { posts, updatePost, scores } = useContext(FeedContext);
  const user = JSON.parse(localStorage.getItem("user"));
  const [selectedPost, setSelectedPost] = useState(null);
  const [completionImage, setCompletionImage] = useState(null);

  const filteredPosts = posts.filter((post) => {
    if (post.status === "open" && user.role === "donor") return true;
    if (post.status === "donated" && user.role === "volunteer") return true;
    if (post.status === "completed") return true;
    return false;
  });

  const handleComplete = () => {
    if (!completionImage) {
      alert("Upload delivery proof photo");
      return;
    }

    updatePost(selectedPost.id, {
      status: "completed",
      volunteer: user.email,
      completionImage: completionImage
    });

    setSelectedPost(null);
    setCompletionImage(null);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Community Feed</h2>

      {filteredPosts.map((post) => (
        <div
          key={post.id}
          className="card shadow-sm mb-4 mx-auto"
          style={{ maxWidth: "500px" }}
        >
          {post.image && (
            <img
              src={post.image}
              alt="request"
              className="card-img-top"
              style={{ height: "300px", objectFit: "cover" }}
            />
          )}

          <div className="card-body">
            <p>{post.description}</p>

            {/* DONOR ACTION */}
            {post.status === "open" &&
              user.role === "donor" && (
                <button
                  className="btn btn-success w-100"
                  onClick={() =>
                    updatePost(post.id, {
                      status: "donated",
                      donor: user.email
                    })
                  }
                >
                  Donate Food
                </button>
              )}

            {/* VOLUNTEER ACTION */}
            {post.status === "donated" &&
              user.role === "volunteer" && (
                <>
                  <button
                    className="btn btn-primary w-100"
                    onClick={() => setSelectedPost(post)}
                  >
                    Complete Delivery
                  </button>
                </>
              )}

            {/* COMPLETED SECTION */}
            {post.status === "completed" && (
              <div className="mt-3">
                <span className="badge bg-success">
                  Completed Successfully
                </span>

                {post.completionImage && (
                  <img
                    src={post.completionImage}
                    alt="proof"
                    className="img-fluid mt-2"
                    style={{ maxHeight: "250px", objectFit: "cover" }}
                  />
                )}

                <div className="mt-2 small text-muted">
                  Reporter: {post.reporter} <br />
                  Donor: {post.donor} <br />
                  Volunteer: {post.volunteer}
                </div>

                <div className="mt-2">
                  <strong>Scores:</strong>
                  <br />
                  Reporter: {scores[post.reporter] || 0} pts
                  <br />
                  Donor: {scores[post.donor] || 0} pts
                  <br />
                  Volunteer: {scores[post.volunteer] || 0} pts
                </div>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* CAMERA MODAL */}
      {selectedPost && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ background: "rgba(0,0,0,0.6)" }}
        >
          <div className="bg-white p-4 rounded shadow" style={{ width: "350px" }}>
            <h5 className="mb-3">Upload Delivery Proof</h5>

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
              className="btn btn-success w-100 mb-2"
              onClick={handleComplete}
            >
              Submit Proof
            </button>

            <button
              className="btn btn-secondary w-100"
              onClick={() => setSelectedPost(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Feed;
