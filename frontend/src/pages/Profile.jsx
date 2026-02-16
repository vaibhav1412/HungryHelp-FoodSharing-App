function Profile() {
  const user = JSON.parse(localStorage.getItem("user") || "null");

  return (
    <div className="container mt-4">
      <h3>Profile</h3>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
    </div>
  );
}

export default Profile;
