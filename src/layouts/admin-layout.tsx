import { ConfigProvider, theme } from "antd";
import React, { ReactNode } from "react";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { CiCamera, CiCloud, CiShop, CiUser } from "react-icons/ci";
import { IoCloudUploadOutline } from "react-icons/io5";
import { AiOutlineBarChart } from "react-icons/ai";
import { FaAppStore } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import logo from "@/assets/indiegamezone-logo.svg";

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

const items: MenuProps["items"] = [
  CiUser,
  CiCamera,
  IoCloudUploadOutline,
  AiOutlineBarChart,
  CiCloud,
  FaAppStore,
  FaUserGroup,
  CiShop,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

const AdminLayout = ({ children }: { children: ReactNode }) => {
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
        <Sider style={siderStyle} width={256}>
          <div className="p-3 my-3">
            <img src={logo} alt="indiegamezone logo" className="w-40" />
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={items}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }} />
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
