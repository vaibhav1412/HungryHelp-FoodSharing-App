import { useContext } from "react";
import { FeedContext } from "../context/FeedContext";

function Feed() {
  const { posts } = useContext(FeedContext);

  const completed = posts
    .filter((p) => p.status === "COMPLETED")
    .sort(
      (a, b) =>
        new Date(b.updatedAt) - new Date(a.updatedAt)
    );

  const generateMessage = (post) => {
    const reporter = post.reporter;
    const donor = post.donor;
    const volunteer = post.volunteer;

    if (volunteer) {
      return `${reporter} raised a request for help. ${donor} stepped forward to donate food, and ${volunteer} ensured safe delivery. A proud moment for the HungryHelp community 🌱`;
    }

    return `${reporter} raised a request for help. ${donor} personally delivered food and made a direct impact. Together, we fight hunger 💚`;
  };

  const formatTime = (date) => {
    const now = new Date();
    const postTime = new Date(date);
    const diffMin = Math.floor((now - postTime) / 60000);

    if (diffMin < 1) return "Just now";
    if (diffMin < 60) return diffMin + " min ago";
    if (diffMin < 1440)
      return Math.floor(diffMin / 60) + " hr ago";

    return postTime.toLocaleDateString();
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "650px" }}>
      <h4 className="fw-bold mb-4">🌍 Community Impact</h4>

      {completed.length === 0 && (
        <div className="alert alert-light border shadow-sm">
          No completed donations yet.
        </div>
      )}

      {completed.map((post) => (
        <div
          key={post.id}
          className="card mb-4 border-0 shadow-sm"
          style={{ borderRadius: "14px" }}
        >
          <div className="card-body p-3">

            {post.completionImage && (
              <img
                src={post.completionImage}
                alt="Completion"
                style={{
                  width: "100%",
                  maxHeight: "280px",
                  objectFit: "contain",
                  borderRadius: "10px",
                  marginBottom: "12px"
                }}
              />
            )}

            <h6 className="fw-bold mb-2">
              🍽 Donation Successfully Delivered
            </h6>

            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: "1.4"
              }}
            >
              {generateMessage(post)}
            </p>

            <div className="d-flex justify-content-between mt-3 small text-muted">
              <span>📍 {post.locationName}</span>
              <span>{formatTime(post.updatedAt)}</span>
            </div>

            <div className="mt-2 small text-success">
              +10 Impact Points Awarded 🏆
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}

export default Feed;
