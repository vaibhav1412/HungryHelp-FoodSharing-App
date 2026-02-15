import { useContext } from "react";
import { FeedContext } from "../context/FeedContext";

function HomeFeed() {
  const { posts } = useContext(FeedContext);

  const completedPosts = posts.filter(
    (post) => post.status === "COMPLETED"
  );

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Community Impact Feed</h2>

      {completedPosts.length === 0 && (
        <p>No completed donations yet.</p>
      )}

      {completedPosts.map((post) => (
        <div
          key={post.id}
          className="card shadow-sm mb-4 mx-auto"
          style={{ maxWidth: "500px" }}
        >
          {post.completionImage && (
            <img
              src={post.completionImage}
              alt=""
              className="card-img-top"
              style={{ height: "300px", objectFit: "cover" }}
            />
          )}

          <div className="card-body">
            <p>{post.description}</p>

            <p className="small text-muted">
              📍 {post.location}
            </p>

            <hr />

            <p className="small">
              👤 Reporter: {post.reporter} <br />
              🥘 Donor: {post.donor} <br />
              🚚 Volunteer: {post.volunteer || "Not Required"}
            </p>

            <span className="badge bg-success">
              Donation Completed
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeFeed;
