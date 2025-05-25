import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/log-in-page";
import SignUpPage from "./pages/sign-up-page";
import HomeContainer from "./containers/home-container";
import AdminContainer from "./containers/admin-container";
import AuthLayout from "./layouts/auth-layout";
import AdminLoginPage from "./pages/admin/admin-login-page";

function App() {
  return (
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
      <Route path="/admin/*" element={<AdminContainer />} />
      <Route path="/*" element={<HomeContainer />} />
    </Routes>
  );
}

export default App;
