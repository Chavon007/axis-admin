import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/auth/login";
import SignupPage from "../pages/auth/signup";
import { VerifyPage } from "../pages/auth/verify";
import Dashboard from "../pages/dashboard/dashbaord";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/verify-account" element={<VerifyPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
