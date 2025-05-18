import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ReactNode } from "react";
import background from "@/assets/video_game_background.svg";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-zinc-900 to-zinc-950">
      <Navbar />
      <div
        className="flex-1 flex-col flex"
        style={{ backgroundImage: `url(${background})` }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
