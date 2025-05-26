import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Menu, MenuProps, theme } from "antd";
import { ReactNode } from "react";
import { FaChartLine, FaGamepad, FaTags } from "react-icons/fa";
import { LuPackage } from "react-icons/lu";
import { TbCoin } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const DeveloperDashboardLayout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const items: MenuItem[] = [
    {
      label: "Manage Games",
      key: "/dev/manage-games",
      icon: <FaGamepad />,
      onClick: () => {
        navigate("/dev/manage-games");
      },
    },
    {
      label: "Analytics",
      key: "/dev/dashboard",
      icon: <FaChartLine />,
      onClick: () => {
        navigate("/dev/dashboard");
      },
    },
    {
      label: "Earnings",
      key: "/dev/earnings",
      icon: <TbCoin />,
      onClick: () => {
        navigate("/dev/earnings");
      },
    },
    {
      label: "Promotions",
      key: "/dev/promotions",
      icon: <FaTags />,
      onClick: () => {
        navigate("/dev/promotions");
      },
    },
    {
      label: "Commercial Packages",
      key: "/dev/commercial-packages",
      icon: <LuPackage />,
      onClick: () => {
        navigate("/dev/commercial-packages");
      },
    },
  ];
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div>
      <div
        style={{ background: colorBgContainer }}
        className="border-b border-gray-700"
      >
        <MaxWidthWrapper>
          <Menu mode="horizontal" items={items} selectedKeys={[location.pathname]}/>
        </MaxWidthWrapper>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default DeveloperDashboardLayout;
