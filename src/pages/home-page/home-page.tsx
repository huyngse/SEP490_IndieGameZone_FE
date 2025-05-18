import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Link } from "react-router-dom";
import FeaturedGameSection from "./featured-game-section";
import SpecialOffersSection from "./special-offers-section";
import { IoTimer } from "react-icons/io5";
import { MdAttachMoney, MdMoneyOff } from "react-icons/md";
import { FaTags } from "react-icons/fa";

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
      <section className="pb-9">
        <h2 className="text-2xl font-bold text-center my-5">Tìm Kiếm Game</h2>
        <div className="grid grid-cols-4 gap-3">
          <Link
            to={"/search/latest"}
            className="cursor-box btn-1 font-bold drop-shadow relative"
          >
            <IoTimer className="absolute size-24 -right-7 text-zinc-500 -z-10" />
            Mới Phát Hành
          </Link>
          <Link
            to={"/search/sales"}
            className="cursor-box btn-1 font-bold drop-shadow relative"
          >
            <MdAttachMoney className="absolute size-24 -right-7 text-zinc-500 -z-10" />
            Ưu Đãi
          </Link>
          <Link
            to={"/search?maxPrice=0"}
            className="cursor-box btn-1 font-bold drop-shadow relative"
          >
            <MdMoneyOff className="absolute size-24 -right-7 text-zinc-500 -z-10" />
            Miễn Phí
          </Link>
          <Link
            to={"/tags"}
            className="cursor-box btn-1 font-bold drop-shadow relative"
          >
            <FaTags className="absolute size-24 -right-7 text-zinc-500 -z-10" />
            Bằng Tags
          </Link>
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default HomePage;
