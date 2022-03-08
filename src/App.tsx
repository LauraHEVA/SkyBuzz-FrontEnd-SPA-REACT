import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={"placeholder <LoginPage>"} />
      <Route path="/register" element={"placeholder <RegisterPage>"} />
      <Route path="/home" element={"placeholder <HomePage>"} />
      <Route path="*" element={"<NotFoundPage />"} />
    </Routes>
  );
}

export default App;
