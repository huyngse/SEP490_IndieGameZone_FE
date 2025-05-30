import UserProfileContainer from "@/layouts/user-profile-layout";
import UserProfilePage from "@/pages/user-profile/user-profile-page";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

const UserProfileContaienr = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/");
    }
  }, []);
  return (
    <UserProfileContainer>
      <Routes>
        <Route path="/profile" element={<UserProfilePage />} />
      </Routes>
    </UserProfileContainer>
  );
};

export default UserProfileContaienr;
