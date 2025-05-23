import AdminLayout from "@/layouts/admin-layout";
import AdminLoginPage from "@/pages/admin/admin-login-page";
import DashBoardPage from "@/pages/admin/dashboard-page";
import ManageLanguages from "@/pages/admin/manage-languages/manage-languages";
import AdminNotFoundPage from "@/pages/errors/admin-not-found-page";
import { Route, Routes } from "react-router-dom";

const AdminContainer = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<DashBoardPage />} />
        <Route path="/dashboard" element={<DashBoardPage />} />
        <Route path="/log-in" element={<AdminLoginPage />} />
        <Route path="*" element={<AdminNotFoundPage />} />
        <Route path="/manage-languages" element={<ManageLanguages />} />
      </Routes>
    </AdminLayout>
  );
};

export default AdminContainer;
