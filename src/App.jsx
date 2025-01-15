import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from "./pages/HomePage/HomePage";
import Nav from "./components/Nav/Nav";
import AddHabitsPage from "./pages/AddHabitsPage/AddHabitsPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import FriendsPage from "./pages/FriendsPage/FriendsPage";
import LoginPage from "./pages/LoginPage/LoginPage"
import SignupPage from "./pages/SignupPage/SignupPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/:id" element={<Homepage />} />
        <Route path="/habits" element={<AddHabitsPage />} />
        <Route path="/friends/:id" element={<FriendsPage />} />
      </Routes>
      <Nav />
    </BrowserRouter>
  );
}

export default App;
