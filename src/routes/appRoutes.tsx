import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/auth/login";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
