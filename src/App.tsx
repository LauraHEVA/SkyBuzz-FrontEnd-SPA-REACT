import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import "@fontsource/nunito";
import "@fontsource/poppins";
import "@fontsource/permanent-marker";
import "@fontsource/shadows-into-light";
import NotFoundPage from "./pages/NotFoundPage";
import NewBuzzPage from "./pages/NewBuzzPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/newbuzz" element={<NewBuzzPage />} />
      <Route path="/login" element={<NotFoundPage />} />
      <Route path="/register" element={"placeholder <RegisterPage>"} />
      <Route path="/home" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
