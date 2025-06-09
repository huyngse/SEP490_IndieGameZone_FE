import DeveloperDashboardLayout from "@/layouts/developer-dashboard-layout";
import HomeLayout from "@/layouts/home-layout";
import DevDashBoardPage from "@/pages/developer/dev-dashboard-page";
import DevManageGamesPage from "@/pages/developer/dev-manage-games-page";
import NotFoundPage from "@/pages/errors/simple-not-found-page";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const DeveloperDashboardContainer = () => {
  const DevUploadGamePage = lazy(
    () => import("@/pages/developer/upload-game/dev-upload-game-page")
  );
  const PreviewUploadPage = lazy(
    () => import("@/pages/developer/upload-game/game-preview-upload-page")
  );

  return (
    <HomeLayout>
      <Suspense
        fallback={
          <div className="h-screen flex items-center justify-center">
            Loading page...
          </div>
        }
      >
        <DeveloperDashboardLayout>
          <Routes>
            <Route path="/" element={<DevDashBoardPage />} />
            <Route path="/dashboard" element={<DevDashBoardPage />} />
            <Route path="/upload-game" element={<DevUploadGamePage />} />
            <Route
              path="/upload-game/preview"
              element={<PreviewUploadPage />}
            />
            <Route path="/manage-games" element={<DevManageGamesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </DeveloperDashboardLayout>
      </Suspense>
    </HomeLayout>
  );
};

export default DeveloperDashboardContainer;
