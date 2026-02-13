import Layout from "../../components/Layout";
import StatsCard from "../../components/StatsCard";

function AdminDashboard() {
  return (
    <Layout>
      <h2 className="mb-4">Admin Dashboard</h2>

      <div className="row g-4">
        <div className="col-md-3">
          <StatsCard title="Total Users" value="50" color="dark" />
        </div>
        <div className="col-md-3">
          <StatsCard title="Donations" value="120" color="success" />
        </div>
        <div className="col-md-3">
          <StatsCard title="Reports" value="30" color="warning" />
        </div>
        <div className="col-md-3">
          <StatsCard title="Active Volunteers" value="15" color="info" />
        </div>
      </div>
    </Layout>
  );
}

export default AdminDashboard;
