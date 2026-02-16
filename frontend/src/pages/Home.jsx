import ReporterDashboard from "./reporter/ReporterDashboard";
import DonorDashboard from "./donor/DonorDashboard";
import VolunteerDashboard from "./volunteer/VolunteerDashboard";

function Home() {
  const user = JSON.parse(localStorage.getItem("user") || "null");

  if (!user) return null;

  if (user.activeRole === "reporter")
    return <ReporterDashboard />;

  if (user.activeRole === "donor")
    return <DonorDashboard />;

  if (user.activeRole === "volunteer")
    return <VolunteerDashboard />;

  return null;
}

export default Home;
