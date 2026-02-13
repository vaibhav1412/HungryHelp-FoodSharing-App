import Layout from "../../components/Layout";
import StatsCard from "../../components/StatsCard";

function DonorDashboard() {
  return (
    <Layout>
      <h2 className="mb-4">Donor Dashboard</h2>

      <div className="row g-4">
        <div className="col-md-4">
          <StatsCard title="Total Donations" value="12" color="success" />
        </div>
        <div className="col-md-4">
          <StatsCard title="Pending Pickups" value="3" color="warning" />
        </div>
        <div className="col-md-4">
          <StatsCard title="Completed" value="9" color="primary" />
        </div>
      </div>
    </Layout>
  );
}

export default DonorDashboard;
