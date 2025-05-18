import HomeLayout from "@/layouts/home-layout";
import NotFoundPage from "@/pages/errors/not-found-page";
import HomePage from "@/pages/home-page/home-page";
import { Route, Routes } from "react-router-dom";

const HomeContainer = () => {
  return (
    <HomeLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HomeLayout>
  );
};

export default HomeContainer;
