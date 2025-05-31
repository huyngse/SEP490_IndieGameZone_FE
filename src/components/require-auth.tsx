import useAuthStore from "@/store/use-auth-store";
import Loader from "./loader";
import { Navigate, Outlet } from "react-router-dom";
import { ConfigProvider, theme } from "antd";

const RequireAuth = () => {
  const { loading, profile, error } = useAuthStore();
  const token = localStorage.getItem("accessToken");
  if (loading)
    return (
      <ConfigProvider
        theme={{
          algorithm: theme.defaultAlgorithm,
          token: {
            colorPrimary: "#FF6600",
            borderRadius: 2,
          },
        }}
      >
        <Loader />
      </ConfigProvider>
    );
  if ((!profile && error) || !token) {
    return <Navigate to="/log-in" replace />;
  }
  if (profile) {
    return <Outlet />;
  }
};

export default RequireAuth;
