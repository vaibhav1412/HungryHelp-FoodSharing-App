import { useContext } from "react";
import { FeedContext } from "../context/FeedContext";
import CountUp from "react-countup";

function Leaderboard() {
  const { points } = useContext(FeedContext);
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const sorted = Object.entries(points).sort(
    (a, b) => b[1] - a[1]
  );

  const top5 = sorted.slice(0, 5);
  const userIndex = sorted.findIndex(
    ([email]) => email === user?.email
  );

  const userPosition = userIndex !== -1 ? userIndex + 1 : null;
  const isUserInTop5 = userPosition && userPosition <= 5;

  const medalIcon = (index) => {
    if (index === 0) return "👑";
    if (index === 1) return "🥈";
    if (index === 2) return "🥉";
    return "⭐";
  };

  const medalStyle = (index) => {
    if (index === 0) return "bg-warning text-dark";
    if (index === 1) return "bg-secondary text-white";
    if (index === 2) return "bg-danger text-white";
    return "bg-light text-dark";
  };

  return (
    <div
      className="container mt-4 pb-5"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #1e3c72, #2a5298)"
      }}
    >
      <h2 className="text-center text-white mb-5">
        🏆 Elite Impact Leaderboard
      </h2>

      {/* TOP 5 */}
      {top5.map(([email, score], index) => (
        <div
          key={email}
          className={`card mb-3 shadow-lg border-0 ${
            email === user?.email
              ? "border border-warning border-4"
              : ""
          }`}
          style={{
            backdropFilter: "blur(10px)",
            background: "rgba(255,255,255,0.9)"
          }}
        >
          <div className="card-body d-flex justify-content-between align-items-center">

            <div className="d-flex align-items-center gap-3">
              <div
                className={`rounded-circle d-flex justify-content-center align-items-center ${medalStyle(index)}`}
                style={{
                  width: "45px",
                  height: "45px",
                  fontSize: "18px",
                  fontWeight: "bold"
                }}
              >
                {medalIcon(index)}
              </div>

              <div>
                <strong>
                  #{index + 1} — {email}
                </strong>
              </div>
            </div>

            <div>
              <span className="fs-4 fw-bold text-success">
                <CountUp end={score} duration={1.5} /> pts
              </span>
            </div>

          </div>
        </div>
      ))}

      {/* YOUR POSITION IF NOT TOP 5 */}
      {!isUserInTop5 && userPosition && (
        <>
          <hr className="my-4 text-white" />
          <h5 className="text-center text-white">
            Your Rank
          </h5>

          <div
            className="card shadow-lg border-warning border-4 mt-3"
            style={{
              background: "rgba(255,255,255,0.95)"
            }}
          >
            <div className="card-body d-flex justify-content-between align-items-center">
              <strong>
                #{userPosition} — {user.email}
              </strong>

              <span className="fs-4 fw-bold text-primary">
                <CountUp
                  end={points[user.email] || 0}
                  duration={1.5}
                />{" "}
                pts
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Leaderboard;
