import { useContext } from "react";
import { FeedContext } from "../context/FeedContext";

function Leaderboard() {
  const { points } = useContext(FeedContext);
  const user = JSON.parse(localStorage.getItem("user"));

  const sorted = Object.entries(points)
    .sort((a, b) => b[1] - a[1]);

  return (
    <div className="container mt-4" style={{ maxWidth: "600px" }}>
      <h4 className="fw-bold mb-4">🏆 Leaderboard</h4>

      {sorted.map(([email, score], index) => (
        <div
          key={email}
          className={`card mb-2 p-2 ${
            email === user.email
              ? "border-success shadow"
              : "border-0 shadow-sm"
          }`}
        >
          <div className="d-flex justify-content-between align-items-center">

            <span>
              #{index + 1} — {email}
            </span>

            <strong className="text-success">
              {score} pts
            </strong>

          </div>
        </div>
      ))}
    </div>
  );
}

export default Leaderboard;
