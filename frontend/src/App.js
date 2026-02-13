import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import DonorDashboard from "./pages/donor/DonorDashboard";
import ReporterDashboard from "./pages/reporter/ReporterDashboard";
import VolunteerDashboard from "./pages/volunteer/VolunteerDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import SplashScreen from "./pages/SplashScreen";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
      <Route
        path="/donor"
        element={
          <ProtectedRoute allowedRole="donor">
            <DonorDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/reporter"
        element={
          <ProtectedRoute allowedRole="reporter">
            <ReporterDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/volunteer"element=
        {<ProtectedRoute allowedRole="volunteer">
          <VolunteerDashboard /></ProtectedRoute>}/>
        
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRole="admin">
            <AdminDashboard />
          </ProtectedRoute>}/>
        
</Routes>

</BrowserRouter>
  );
}

export default App;
