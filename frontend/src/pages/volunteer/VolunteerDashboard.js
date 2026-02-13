import Layout from "../../components/Layout";
import StatsCard from "../../components/StatsCard";

function VolunteerDashboard() {
  return (
    <Layout>
      <h2 className="mb-4">Volunteer Dashboard</h2>

      <div className="row g-4">
        <div className="col-md-4">
          <StatsCard title="Available Requests" value="7" color="info" />
        </div>
        <div className="col-md-4">
          <StatsCard title="Accepted Tasks" value="2" color="success" />
        </div>
      </div>
    </Layout>
  );
}

export default VolunteerDashboard;
