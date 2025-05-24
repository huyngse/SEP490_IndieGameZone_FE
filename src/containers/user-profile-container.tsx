import UserProfileContainer from "@/layouts/user-profile-layout";
import UserProfilePage from "@/pages/user-profile/user-profile-page";
import { Route, Routes } from "react-router-dom";

const UserProfileContaienr = () => {
  return (
    <UserProfileContainer>
      <Routes>
        <Route path="/profile" element={<UserProfilePage />} />
      </Routes>
    </UserProfileContainer>
  );
};

export default UserProfileContaienr;
