import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Link } from "react-router-dom";
import FeaturedGameSection from "./featured-game-section";
import SpecialOffersSection from "./special-offers-section";

const HomePage = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex justify-center items-center gap-5 p-5 font-bold text-xl">
        <Link to={"/"} className="hover-underline">
          Khám Phá
        </Link>
        <Link to={"/search"} className="hover-underline text-gray-500">
          Tìm Kiếm
        </Link>
        <Link to={"/news"} className="hover-underline text-gray-500">
          Tin Tức
        </Link>
      </div>
      <FeaturedGameSection />
      <SpecialOffersSection />
    </MaxWidthWrapper>
  );
};

export default HomePage;
