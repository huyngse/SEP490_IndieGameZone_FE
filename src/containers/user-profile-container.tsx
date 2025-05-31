import HomeLayout from "@/layouts/home-layout";
import UserProfileLayout from "@/layouts/user-profile-layout";
import UserProfilePage from "@/pages/user-profile/user-profile-page";
import { Route, Routes } from "react-router-dom";

const UserProfileContainer = () => {
  return (
    <HomeLayout>
      <UserProfileLayout>
        <Routes>
          <Route path="/profile" element={<UserProfilePage />} />
        </Routes>
      </UserProfileLayout>
    </HomeLayout>
  );
};

export default UserProfileContainer;
