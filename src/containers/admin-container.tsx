import AdminLayout from "@/layouts/admin-layout";
import DashBoardPage from "@/pages/admin/dashboard-page";
import ManageAgeRestrictionPage from "@/pages/admin/manage-age-restrictions/manage-age-restrictions-page";
import ManageCategories from "@/pages/admin/manage-categories/manage-categories";
import ManageLanguages from "@/pages/admin/manage-languages/manage-languages";
import ManagePlatform from "@/pages/admin/manage-platform/manage-platform";
import ManageTags from "@/pages/admin/manage-tags/manage-tags";
import AdminNotFoundPage from "@/pages/errors/simple-not-found-page";
import useProfileStore from "@/store/use-profile-store";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

const AdminContainer = () => {
  const navigate = useNavigate();
  const { profile, loading, fetchProfile } = useProfileStore();
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/");
    } else {
      fetchProfile();
    }
  }, []);

  useEffect(() => {
    if (!loading && profile != null) {
      if (profile.role.name != "Admin" && profile.role.name != "Moderator") {
        navigate("/");
      }
    }
  }, [profile]);


  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<DashBoardPage />} />
        <Route path="/dashboard" element={<DashBoardPage />} />
        <Route path="*" element={<AdminNotFoundPage />} />
        <Route path="/manage-languages" element={<ManageLanguages />} />
        <Route path="/manage-tags" element={<ManageTags />} />
        <Route path="/manage-categories" element={<ManageCategories />} />
        <Route
          path="/manage-age-restrictions"
          element={<ManageAgeRestrictionPage />}
        />
        <Route path="/manage-platforms" element={<ManagePlatform />} />
      </Routes>
    </AdminLayout>
  );
};

export default AdminContainer;
