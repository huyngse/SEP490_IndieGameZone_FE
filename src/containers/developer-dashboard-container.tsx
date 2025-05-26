import DeveloperDashboardLayout from "@/layouts/developer-dashboard-layout";
import DevDashBoardPage from "@/pages/developer/dev-dashboard-page";
import DevManageGamesPage from "@/pages/developer/dev-manage-games-page";
import NotFoundPage from "@/pages/errors/simple-not-found-page";
import { Route, Routes } from "react-router-dom";

const DeveloperDashboardContainer = () => {
  return (
    <DeveloperDashboardLayout>
      <Routes>
        <Route path="/" element={<DevDashBoardPage />} />
        <Route path="/dashboard" element={<DevDashBoardPage />} />
        <Route path="/manage-games" element={<DevManageGamesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </DeveloperDashboardLayout>
  );
};

export default DeveloperDashboardContainer;
