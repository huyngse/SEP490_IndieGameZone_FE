import { ConfigProvider, theme } from "antd";
import { ReactNode, useEffect } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    document.body.classList.add("dark");
  }, []);
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: "#FF6600",
          borderRadius: 2,
          colorLink: "#FFF",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AuthLayout;
