import { useContext } from "react";
import { FeedContext } from "../../context/FeedContext";

function VolunteerDashboard() {
  const { posts, updatePost } = useContext(FeedContext);
  const user = JSON.parse(localStorage.getItem("user"));

  const volunteerPosts = posts
    .filter(
      (p) =>
        p.status === "VOLUNTEER_REQUIRED" ||
        (p.status === "VOLUNTEER_ACCEPTED" &&
          p.volunteer === user.email)
    )
    .sort(
      (a, b) =>
        new Date(a.createdAt) - new Date(b.createdAt)
    );

  const handleAccept = (post) => {
    updatePost(post.id, {
      volunteer: user.email,
      status: "VOLUNTEER_ACCEPTED"
    });
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
      <h4>Volunteer Requests</h4>

      {volunteerPosts.map((post) => (
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

            {post.status === "VOLUNTEER_REQUIRED" && (
              <button
                className="btn btn-success btn-sm"
                onClick={() => handleAccept(post)}
              >
                Accept
              </button>
            )}

            {post.status === "VOLUNTEER_ACCEPTED" &&
             post.volunteer === user.email && (
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

export default VolunteerDashboard;
