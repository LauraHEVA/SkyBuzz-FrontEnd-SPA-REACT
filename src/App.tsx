import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import "@fontsource/nunito";
import "@fontsource/poppins";
import "@fontsource/permanent-marker";
import NotFoundPage from "./pages/NotFoundPage";
import Toastr from "./components/Toastr/Toastr";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/login" element={<Toastr />} />
      <Route path="/register" element={"placeholder <RegisterPage>"} />
      <Route path="/home" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
