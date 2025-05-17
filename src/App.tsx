import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/log-in-page";
import SignUpPage from "./pages/sign-up-page";
import HomeContainer from "./containers/home-container";

function App() {
  return (
    <Routes>
      <Route path="log-in" element={<LoginPage />} />
      <Route path="sign-up" element={<SignUpPage />} />
      <Route path="/*" element={<HomeContainer />} />
    </Routes>
  );
}

export default App;
