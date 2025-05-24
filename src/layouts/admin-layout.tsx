import { Avatar, Button, ConfigProvider, theme } from "antd";
import React, { ReactNode, useState } from "react";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import logo from "@/assets/indiegamezone-logo.svg";
import { useNavigate } from "react-router-dom";
import { MdCategory, MdSpaceDashboard } from "react-icons/md";
import { BiSolidUserAccount } from "react-icons/bi";
import { LiaLanguageSolid } from "react-icons/lia";
import { FaTags } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import { GrAchievement } from "react-icons/gr";
import { GiAbstract018, GiFlatPlatform } from "react-icons/gi";

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

  const navigate = useNavigate();
  const items: MenuProps["items"] = [
    {
      key: "1",
      icon: <MdSpaceDashboard />,
      label: "Dashboard",
      onClick: () => {
        navigate("/admin/dashboard");
      },
    },
    {
      key: "2",
      icon: <BiSolidUserAccount />,
      label: "Manage Accounts",
      children: [
        {
          key: "2-1",
          label: "Manage Users",
          onClick: () => {
            navigate("/admin/manage-users");
          },
        },
        {
          key: "2-2",
          label: "Manage Developers",
          onClick: () => {
            navigate("/admin/manage-developers");
          },
        },
      ],
    },
    {
      key: "3",
      icon: <LiaLanguageSolid />,
      label: "Manage Languages",
      onClick: () => {
        navigate("/admin/manage-languages");
      },
    },
    {
      key: "4",
      icon: <FaTags />,
      label: "Manage Tags",
      onClick: () => {
        navigate("/admin/manage-tags");
      },
      
    },
      {
      key: "5",
      icon: <MdCategory />,
      label: "Manage Categories",
      onClick: () => {
        navigate("/admin/manage-categories");
      },
      
    },
    {
      key: "6",
      icon: <CiDiscount1 />,
      label: "Manage Dicounts",
      onClick: () => {
        navigate("/admin/manage-categories");
      },
      
    },
    {
      key: "7",
      icon: <GrAchievement />,
      label: "Manage Achievements",
      onClick: () => {
        navigate("/admin/manage-categories");
      },
      
    },
      {
      key: "8",
      icon: <GiAbstract018 />,
      label: "Manage Age Restrictions",
      onClick: () => {
        navigate("/admin/manage-categories");
      },
      
    },
        {
      key: "8",
      icon: <GiFlatPlatform />,
      label: "Manage Platforms",
      onClick: () => {
        navigate("/admin/manage-categories");
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
        <Sider trigger={null} collapsible collapsed={collapsed} style={siderStyle} width={256}>
          <div className="p-3 my-3">
            <img src={logo} alt="indiegamezone logo" className="w-40" />
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]} items={items} />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer, boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
            <div className="flex items-center justify-between h-full pr-2 ">
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />

              <Avatar
                size={50}
                src={
                  <img
                    src="https://st.quantrimang.com/photos/image/2022/01/27/Avatar-Free-Fire-ngau-12.jpg"
                    alt="avatar"
                  />
                }
              />
            </div>
          </Header>
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>{children}</Content>
          <Footer style={{ textAlign: "center" }}>Ant Design ©{new Date().getFullYear()} Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default AdminLayout;
