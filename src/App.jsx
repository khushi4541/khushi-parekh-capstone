import "./App.scss";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from "./pages/HomePage/HomePage";
import Nav from "./components/Nav/Nav";
import AddHabitsPage from "./pages/AddHabitsPage/AddHabitsPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import FriendsPage from "./pages/FriendsPage/FriendsPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import Modal from "./components/Modal/Modal";


function App() {
  const [modalConfig, setModalConfig] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/";
  };

  const openLogoutModal = () => {
    setModalConfig({
      title: "Log out?",
      message: "Are you sure you would like to log out of your account?",
      primaryActionText: "Log out",
      secondaryActionText: "Cancel",
      primaryAction: handleLogout,
      secondaryAction: () => setModalConfig(null),
    });
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Homepage openModal={setModalConfig} />} />
        <Route path="/add-habit" element={<AddHabitsPage />} />
        <Route path="/friends" element={<FriendsPage />} />
      </Routes>
      {modalConfig && (<Modal {...modalConfig}/>)}
      <Nav openModal={openLogoutModal}/>
    </BrowserRouter>
  );
}

export default App;
