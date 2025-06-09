import { Route, Routes } from "react-router-dom";
import AuthLayout from "./layouts/auth-layout";
import { Suspense, lazy, useEffect } from "react";
import useAuthStore from "./store/use-auth-store";
import RequireAuth from "./components/require-auth";

function App() {
  const { fetchProfile } = useAuthStore();
  const SignUpPage = lazy(() => import("./pages/sign-up-page"));
  const LoginPage = lazy(() => import("./pages/log-in-page"));
  const AdminLoginPage = lazy(() => import("./pages/admin/admin-login-page"));
  const AdminContainer = lazy(() => import("./containers/admin-container"));
  const HomeContainer = lazy(() => import("./containers/home-container"));
  const DeveloperDashboardContainer = lazy(
    () => import("./containers/developer-dashboard-container")
  );
  const UserProfileContainer = lazy(
    () => import("./containers/user-profile-container")
  );

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      fetchProfile();
    }
  }, []);

  return (
    <Suspense
      fallback={
        <div className="h-screen flex items-center justify-center">
          Loading page...
        </div>
      }
    >
      <Routes>
        <Route
          path="log-in"
          element={
            <AuthLayout>
              <LoginPage />
            </AuthLayout>
          }
        />
        <Route
          path="sign-up"
          element={
            <AuthLayout>
              <SignUpPage />
            </AuthLayout>
          }
        />
        <Route
          path="/admin/log-in"
          element={
            <AuthLayout>
              <AdminLoginPage />
            </AuthLayout>
          }
        />
        <Route element={<RequireAuth allowedRoles={["Admin", "Moderator"]} />}>
          <Route path="/admin/*" element={<AdminContainer />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={["Developer", "Player"]} />}>
          <Route path="/account/*" element={<UserProfileContainer />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={["Developer"]} />}>
          <Route path="/dev/*" element={<DeveloperDashboardContainer />} />
        </Route>
        <Route path="/*" element={<HomeContainer />} />
      </Routes>
    </Suspense>
  );
}

export default App;
