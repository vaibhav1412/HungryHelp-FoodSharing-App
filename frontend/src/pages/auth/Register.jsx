function Register() {
  return (
    <div className="container mt-5 text-center">
      <h3>Create Account</h3>

      <button
        className="btn btn-primary mt-3"
        onClick={() => (window.location.href = "/login")}
      >
        Back to Login
      </button>
    </div>
  );
}

export default Register;
