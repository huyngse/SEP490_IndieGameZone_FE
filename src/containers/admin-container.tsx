import AdminLayout from "@/layouts/admin-layout";
import DashBoardPage from "@/pages/admin/dashboard-page";
import ManageCategories from "@/pages/admin/manage-categories/manage-categories";
import ManageLanguages from "@/pages/admin/manage-languages/manage-languages";
import ManagePlatform from "@/pages/admin/manage-platform/manage-platform";
import ManageTags from "@/pages/admin/manage-tags/manage-tags";
import AdminNotFoundPage from "@/pages/errors/admin-not-found-page";
import { Route, Routes } from "react-router-dom";

const AdminContainer = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<DashBoardPage />} />
        <Route path="/dashboard" element={<DashBoardPage />} />
        <Route path="*" element={<AdminNotFoundPage />} />
        <Route path="/manage-languages" element={<ManageLanguages />} />
        <Route path="/manage-tags" element={<ManageTags />} />
        <Route path="/manage-categories" element={<ManageCategories />} />
        <Route path="/manage-platforms" element={<ManagePlatform />} />
      </Routes>
    </AdminLayout>
  );
};

export default AdminContainer;
