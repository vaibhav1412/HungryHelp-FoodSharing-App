import { useContext } from "react";
import { FeedContext } from "../../context/FeedContext";

function DonorDashboard() {
  const { posts, updatePost } = useContext(FeedContext);
  const user = JSON.parse(localStorage.getItem("user"));

  const donorPosts = posts
    .filter(
      (p) =>
        p.status === "OPEN" ||
        (p.status === "DONOR_ACCEPTED" &&
          p.donor === user.email)
    )
    .sort(
      (a, b) =>
        new Date(a.createdAt) - new Date(b.createdAt)
    );

  const handleAccept = (post) => {
    const needVolunteer = window.confirm(
      "Do you need a volunteer?"
    );

    if (needVolunteer) {
      updatePost(post.id, {
        donor: user.email,
        volunteerNeeded: true,
        status: "VOLUNTEER_REQUIRED"
      });
    } else {
      updatePost(post.id, {
        donor: user.email,
        volunteerNeeded: false,
        status: "DONOR_ACCEPTED"
      });
    }
  };

  const handleComplete = (post) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onloadend = () => {
        updatePost(post.id, {
          status: "COMPLETED",
          completionImage: reader.result
        });
      };
      reader.readAsDataURL(file);
    };

    input.click();
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "650px" }}>
      <h4>Donor Requests</h4>

      {donorPosts.map((post) => (
        <div
          key={post.id}
          className="card mb-3 shadow-sm"
        >
          <div className="card-body">

            {post.image && (
              <img
                src={post.image}
                alt=""
                style={{
                  width: "100%",
                  maxHeight: "220px",
                  objectFit: "contain",
                  borderRadius: "10px",
                  marginBottom: "10px"
                }}
              />
            )}

            <p>{post.description}</p>

            <p className="small text-muted">
              📍 {post.locationName}
            </p>

            <p className="small text-muted">
              🕒 {new Date(post.createdAt).toLocaleString()}
            </p>

            {post.status === "OPEN" && (
              <button
                className="btn btn-success btn-sm"
                onClick={() => handleAccept(post)}
              >
                Accept
              </button>
            )}

            {post.status === "DONOR_ACCEPTED" &&
             post.donor === user.email && (
              <button
                className="btn btn-primary btn-sm mt-2"
                onClick={() => handleComplete(post)}
              >
                Complete with Photo
              </button>
            )}

          </div>
        </div>
      ))}
    </div>
  );
}

export default DonorDashboard;
