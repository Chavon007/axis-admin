import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/auth/login";
import SignupPage from "../pages/auth/signup";
import { VerifyPage } from "../pages/auth/verify";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/verify-account" element={<VerifyPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
