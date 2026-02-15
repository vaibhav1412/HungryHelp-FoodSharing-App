import { useContext, useState } from "react";
import { FeedContext } from "../../context/FeedContext";

function DonorFeed() {
  const { posts, updatePost } = useContext(FeedContext);
  const user = JSON.parse(localStorage.getItem("user"));
  const [selectedPost, setSelectedPost] = useState(null);
  const [completionImage, setCompletionImage] = useState(null);

  const openPosts = posts.filter(
    (post) => post.status === "OPEN"
  );

  const donorAcceptedPosts = posts.filter(
    (post) =>
      post.status === "DONOR_ACCEPTED" &&
      post.donor === user.email
  );

  const handleAccept = (post) => {
    const volunteerNeeded = window.confirm(
      "Do you need a volunteer for delivery?"
    );

    if (volunteerNeeded) {
      updatePost(post.id, {
        status: "VOLUNTEER_REQUIRED",
        donor: user.email,
        volunteerRequired: true
      });
    } else {
      updatePost(post.id, {
        status: "DONOR_ACCEPTED",
        donor: user.email,
        volunteerRequired: false
      });
    }
  };

  const handleComplete = () => {
    if (!completionImage) {
      alert("Upload delivery proof");
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
      <h2>Donor Section</h2>

      {/* OPEN POSTS */}
      <h5 className="mt-4">Open Requests</h5>
      {openPosts.map((post) => (
        <div key={post.id} className="card mb-3 p-3">
          <p>{post.description}</p>
          <button
            className="btn btn-success"
            onClick={() => handleAccept(post)}
          >
            Accept
          </button>
        </div>
      ))}

      {/* DIRECT COMPLETION */}
      <h5 className="mt-4">Your Deliveries</h5>
      {donorAcceptedPosts.map((post) => (
        <div key={post.id} className="card mb-3 p-3">
          <p>{post.description}</p>

          <button
            className="btn btn-primary"
            onClick={() => setSelectedPost(post)}
          >
            Complete Delivery
          </button>
        </div>
      ))}

      {/* CAMERA MODAL */}
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

export default DonorFeed;
