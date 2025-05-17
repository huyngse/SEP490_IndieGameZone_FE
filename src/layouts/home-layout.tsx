import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex-col flex">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
