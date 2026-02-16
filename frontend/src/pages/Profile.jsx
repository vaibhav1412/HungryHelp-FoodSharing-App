import { useState, useContext } from "react";
import { FeedContext } from "../context/FeedContext";
import { motion } from "framer-motion";

function Profile() {
  const { posts, points } = useContext(FeedContext);
  const storedUser = JSON.parse(localStorage.getItem("user") || "null");

  const [user, setUser] = useState(storedUser);
  const [showModal, setShowModal] = useState(false);

  if (!user) return null;

  // 📊 Stats
  const reportCount = posts.filter(
    (p) => p.reporter === user.email
  ).length;

  const donationCount = posts.filter(
    (p) => p.donor === user.email
  ).length;

  const volunteerCount = posts.filter(
    (p) => p.volunteer === user.email
  ).length;

  const score = points[user.email] || 0;

  // 📸 Change Photo
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const updatedUser = {
        ...user,
        profilePhoto: reader.result
      };

      localStorage.setItem("user", JSON.stringify(updatedUser));
      setUser(updatedUser);
      setShowModal(false);
    };

    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = () => {
    const updatedUser = {
      ...user,
      profilePhoto: null
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setShowModal(false);
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "600px" }}>
      <div className="card shadow-lg p-4 border-0 rounded-4 text-center">

        {/* 🔥 CENTER FIXED PROFILE PHOTO */}
        <div className="d-flex flex-column align-items-center">

          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
            onClick={() => setShowModal(true)}
          >
            {user.profilePhoto ? (
              <img
                src={user.profilePhoto}
                alt="Profile"
                className="rounded-circle shadow"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  border: "4px solid #198754"
                }}
              />
            ) : (
              <div
                className="rounded-circle bg-success text-white d-flex justify-content-center align-items-center shadow"
                style={{
                  width: "150px",
                  height: "150px",
                  fontSize: "40px"
                }}
              >
                {user.name?.charAt(0).toUpperCase()}
              </div>
            )}
          </motion.div>

          <p className="mt-2 text-muted small">
            Click photo to edit
          </p>

        </div>

        <hr />

        {/* 👤 User Info */}
        <h4 className="fw-bold">{user.name}</h4>
        <p className="text-muted mb-2">{user.email}</p>

        <hr />

        {/* 📊 Stats Section */}
        <div className="row mt-3">

          <div className="col-4">
            <h6>Reports</h6>
            <strong>{reportCount}</strong>
          </div>

          <div className="col-4">
            <h6>Donations</h6>
            <strong>{donationCount}</strong>
          </div>

          <div className="col-4">
            <h6>Volunteer</h6>
            <strong>{volunteerCount}</strong>
          </div>

        </div>

        <hr />

        {/* 🏆 Score */}
        <div className="mt-3">
          <h6>Total Score</h6>
          <h4 className="text-success fw-bold">
            {score} pts
          </h4>
        </div>

      </div>

      {/* 🔥 MODAL */}
      {showModal && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            background: "rgba(0,0,0,0.6)",
            zIndex: 9999
          }}
        >
          <div
            className="bg-white p-4 rounded-4 shadow"
            style={{ width: "320px" }}
          >
            <h6 className="mb-3 text-center">
              Profile Photo
            </h6>

            {user.profilePhoto && (
              <img
                src={user.profilePhoto}
                alt=""
                className="img-fluid rounded mb-3"
              />
            )}

            <label className="btn btn-success w-100 mb-2">
              Change Photo
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handlePhotoChange}
              />
            </label>

            {user.profilePhoto && (
              <button
                className="btn btn-outline-danger w-100 mb-2"
                onClick={handleRemovePhoto}
              >
                Remove Photo
              </button>
            )}

            <button
              className="btn btn-secondary w-100"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

export default Profile;
