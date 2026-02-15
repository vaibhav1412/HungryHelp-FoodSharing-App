import DonorFeed from "./donor/DonorFeed";
import ReporterDashboard from "./reporter/ReporterDashboard";
import VolunteerSection from "./volunteer/VolunteerSection";

function DashboardRouter() {
  const user = JSON.parse(localStorage.getItem("user") || "null");

  if (!user) return null;

  if (user.activeRole === "donor") return <DonorFeed />;
  if (user.activeRole === "reporter") return <ReporterDashboard />;
  if (user.activeRole === "volunteer") return <VolunteerSection />;

  return null;
}

export default DashboardRouter;
