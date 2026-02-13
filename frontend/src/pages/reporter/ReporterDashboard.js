function DonorDashboard() {
  return (
    <div className="container mt-4">
      <h2>Donor Dashboard</h2>

      <div className="card p-4 mt-3">
        <h5>Add Donation</h5>
        <input className="form-control mb-2" placeholder="Food Type" />
        <input className="form-control mb-2" placeholder="Quantity" />
        <input type="date" className="form-control mb-2" />
        <button className="btn btn-success">Submit</button>
      </div>
    </div>
  );
}

export default DonorDashboard;
