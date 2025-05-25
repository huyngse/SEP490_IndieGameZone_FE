import { Avatar, Button, ConfigProvider, Dropdown, theme } from "antd";
import React, { ReactNode, useState } from "react";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import logo from "@/assets/indiegamezone-logo.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { MdCategory, MdSpaceDashboard } from "react-icons/md";
import { BiSolidUserAccount } from "react-icons/bi";
import { LiaLanguageSolid } from "react-icons/lia";
import { FaDoorOpen, FaTags, FaWindows } from "react-icons/fa";
import { CiDiscount1, CiUser } from "react-icons/ci";
import { GrAchievement } from "react-icons/gr";
import { TbCancel } from "react-icons/tb";

const { Header, Content, Footer, Sider } = Layout;

const siderStyle: React.CSSProperties = {
  overflow: "auto",
  height: "100vh",
  position: "sticky",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarGutter: "stable",
};

const AdminLayout = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/admin/log-in");
  };

  const navigate = useNavigate();
  const menuItems: MenuProps["items"] = [
    {
      key: "5",
      label: "Log Out",
      icon: <FaDoorOpen />,
      danger: true,
      onClick: () => {
        handleLogout;
      },
    },
  ];
  const items: MenuProps["items"] = [
    {
      key: "/admin/dashboard",
      icon: <MdSpaceDashboard />,
      label: "Dashboard",
      onClick: () => {
        navigate("/admin/dashboard");
      },
    },
    {
      key: "Manage Accounts",
      icon: <BiSolidUserAccount />,
      label: "Manage Accounts",
      children: [
        {
          key: "/admin/manage-users",
          label: "Manage Users",
          onClick: () => {
            navigate("/admin/manage-users");
          },
        },
        {
          key: "/admin/manage-developers",
          label: "Manage Developers",
          onClick: () => {
            navigate("/admin/manage-developers");
          },
        },
      ],
    },
    {
      key: "/admin/manage-languages",
      icon: <LiaLanguageSolid />,
      label: "Manage Languages",
      onClick: () => {
        navigate("/admin/manage-languages");
      },
    },
    {
      key: "/admin/manage-tags",
      icon: <FaTags />,
      label: "Manage Tags",
      onClick: () => {
        navigate("/admin/manage-tags");
      },
    },
    {
      key: "/admin/manage-categories",
      icon: <MdCategory />,
      label: "Manage Categories",
      onClick: () => {
        navigate("/admin/manage-categories");
      },
    },
    {
      key: "/admin/manage-dicounts",
      icon: <CiDiscount1 />,
      label: "Manage Dicounts",
      onClick: () => {
        navigate("/admin/manage-dicounts");
      },
    },
    {
      key: "/admin/manage-achivements",
      icon: <GrAchievement />,
      label: "Manage Achievements",
      onClick: () => {
        navigate("/admin/manage-achivements");
      },
    },
    {
      key: "/admin/manage-age-restrictions",
      icon: <TbCancel />,
      label: "Manage Age Restrictions",
      onClick: () => {
        navigate("/admin/manage-age-restrictions");
      },
    },
    {
      key: "/admin/manage-patforms",
      icon: <FaWindows />,
      label: "Manage Platforms",
      onClick: () => {
        navigate("/admin/manage-platforms");
      },
    },
  ];
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: "#FF6600",
          borderRadius: 2,
          colorLink: "#FFF",
        },
      }}
    >
      <Layout hasSider>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={siderStyle}
          width={256}
        >
          <div className="p-3 my-3">
            <img src={logo} alt="indiegamezone logo" className="w-40" />
          </div>
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[location.pathname]}
            items={items}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <div className="flex items-center justify-between h-full px-5 ">
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
              />

              <Dropdown menu={{ items: menuItems }} trigger={["click"]}>
                <Avatar icon={<CiUser />} className="cursor-pointer" />
              </Dropdown>
            </div>
          </Header>
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            {children}
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default AdminLayout;
