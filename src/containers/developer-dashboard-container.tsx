import Loader from "@/components/loader";
import DeveloperDashboardLayout from "@/layouts/developer-dashboard-layout";
import DevDashBoardPage from "@/pages/developer/dev-dashboard-page";
import DevManageGamesPage from "@/pages/developer/dev-manage-games-page";
import DevUploadGamePage from "@/pages/developer/upload-game/dev-upload-game-page";
import NotFoundPage from "@/pages/errors/simple-not-found-page";
import useProfileStore from "@/store/use-profile-store";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

const DeveloperDashboardContainer = () => {
  const navigate = useNavigate();
  const { profile, loading } = useProfileStore();
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (!loading && profile != null) {
      if (profile.role.name != "Developer") {
        navigate("/");
      }
    }
  }, [profile]);

  if (loading) {
    return <Loader />;
  }

  return (
    <DeveloperDashboardLayout>
      <Routes>
        <Route path="/" element={<DevDashBoardPage />} />
        <Route path="/dashboard" element={<DevDashBoardPage />} />
        <Route path="/upload-game" element={<DevUploadGamePage />} />
        <Route path="/manage-games" element={<DevManageGamesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </DeveloperDashboardLayout>
  );
};

export default DeveloperDashboardContainer;
