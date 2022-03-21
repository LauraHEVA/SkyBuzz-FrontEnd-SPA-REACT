import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import "@fontsource/nunito";
import "@fontsource/mukta";
import "@fontsource/poppins";
import "@fontsource/permanent-marker";
import "@fontsource/shadows-into-light";
import NotFoundPage from "./pages/NotFoundPage";
import NewBuzzPage from "./pages/NewBuzzPage";
import DetailBuzzPage from "./pages/DetailBuzzPage";
import {
  ContainerHeader,
  ContainerNavMenu,
} from "./styles/globalStyledComponents";
import Header from "./components/Header/Header";
import NavMenu from "./components/NavMenu/NavMenu";
import Footer from "./components/Footer/Footer";
import Toastr from "./components/Toastr/Toastr";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import RegisterPage from "./pages/RegisterPage";
import { UserData } from "./types/userInterfaces";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { useEffect } from "react";

function App() {
  const user: UserData = useSelector((state: RootState) => state.user);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      user.loggedIn = true;
    }
  }, [user]);

  return (
    <>
      <ContainerHeader>
        <Header title="SkyBuzz" />
      </ContainerHeader>
      <Toastr />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/newbuzz"
          element={user.loggedIn ? <NewBuzzPage /> : <NotFoundPage />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/buzz/:id" element={<DetailBuzzPage />} />
        <Route path="/buzz/*" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ContainerNavMenu>
        <NavMenu />
      </ContainerNavMenu>
      <Footer />
    </>
  );
}

export default App;
