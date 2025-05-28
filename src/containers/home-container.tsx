import HomeLayout from "@/layouts/home-layout";
import NotFoundPage from "@/pages/errors/not-found-page";
import HomePage from "@/pages/home-page/home-page";
import { Route, Routes } from "react-router-dom";
import UserProfileContaienr from "./user-profile-container";
import DeveloperDashboardContainer from "./developer-dashboard-container";
import SearchPage from "@/pages/search-page/search-page";

const HomeContainer = () => {
  return (
    <HomeLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dev/*" element={<DeveloperDashboardContainer />} />
        <Route path="/account/*" element={<UserProfileContaienr />} />
        <Route path="/search/*" element={<SearchPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HomeLayout>
  );
};

export default HomeContainer;
