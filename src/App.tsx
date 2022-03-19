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
import LogoutPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <ContainerHeader>
        <Header title="SkyBuzz" />
      </ContainerHeader>
      <Toastr />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/newbuzz" element={<NewBuzzPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/register" element={"placeholder <RegisterPage>"} />
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
