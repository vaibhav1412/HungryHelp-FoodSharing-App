import { useContext, useState } from "react";
import { FeedContext } from "../context/FeedContext";

function Profile() {
  const { posts, points } = useContext(FeedContext);
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const [profileImage, setProfileImage] = useState(
    localStorage.getItem("profileImage") || null
  );

  const handleImageUpload = (e) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setProfileImage(image);
    localStorage.setItem("profileImage", image);
  };

  if (!user) return null;

  // Calculate Counts
  const donationCount = posts.filter(
    (p) => p.donor === user.email && p.status === "COMPLETED"
  ).length;

  const reportCount = posts.filter(
    (p) => p.reporter === user.email
  ).length;

  const volunteerCount = posts.filter(
    (p) => p.volunteer === user.email && p.status === "COMPLETED"
  ).length;

  const score = points[user.email] || 0;

  const sorted = Object.entries(points).sort(
    (a, b) => b[1] - a[1]
  );

  const position =
    sorted.findIndex(([email]) => email === user.email) + 1;

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">My Profile</h2>

      <div className="card shadow-lg p-4 text-center">

        {/* Profile Photo */}
        <div className="mb-3">
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="rounded-circle"
              style={{
                width: "120px",
                height: "120px",
                objectFit: "cover"
              }}
            />
          ) : (
            <div
              className="rounded-circle bg-secondary d-flex justify-content-center align-items-center text-white"
              style={{
                width: "120px",
                height: "120px",
                margin: "0 auto"
              }}
            >
              No Photo
            </div>
          )}
        </div>

        <input
          type="file"
          className="form-control mb-3"
          onChange={handleImageUpload}
        />

        <h4>{user.email}</h4>

        <hr />

        <div className="row mt-3">

          <div className="col-md-4">
            <h5>🍱 Donations</h5>
            <p>{donationCount}</p>
          </div>

          <div className="col-md-4">
            <h5>📢 Reports</h5>
            <p>{reportCount}</p>
          </div>

          <div className="col-md-4">
            <h5>🚚 Volunteer</h5>
            <p>{volunteerCount}</p>
          </div>

        </div>

        <hr />

        <div className="row mt-3">

          <div className="col-md-6">
            <h5>🏆 Score</h5>
            <p className="fs-4 text-success">{score} pts</p>
          </div>

          <div className="col-md-6">
            <h5>📊 Leaderboard Position</h5>
            <p className="fs-4 text-primary">
              #{position || "N/A"}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Profile;
