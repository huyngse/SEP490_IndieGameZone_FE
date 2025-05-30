import HomeLayout from "@/layouts/home-layout";
import NotFoundPage from "@/pages/errors/not-found-page";
import HomePage from "@/pages/home-page/home-page";
import { Route, Routes, useNavigate } from "react-router-dom";
import UserProfileContaienr from "./user-profile-container";
import DeveloperDashboardContainer from "./developer-dashboard-container";
import useProfileStore from "@/store/use-profile-store";
import { useEffect } from "react";

const HomeContainer = () => {
  const { fetchProfile, loading, profile } = useProfileStore();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      fetchProfile();
    }
  }, []);

  useEffect(() => {
    if (!loading && profile != null) {
      if (profile.role.name == "Admin" || profile.role.name == "Moderator") {
        navigate("/admin");
      }
    }
  }, [profile]);
  
  return (
    <HomeLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dev/*" element={<DeveloperDashboardContainer />} />
        <Route path="/account/*" element={<UserProfileContaienr />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HomeLayout>
  );
};

export default HomeContainer;
