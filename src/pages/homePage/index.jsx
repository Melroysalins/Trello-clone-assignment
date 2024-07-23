import React from "react";
import "./index.css";
import NavigationBar from "../../components/navigationBar";
import LoginModal from "../../components/LoginModal";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Outlet />
    </div>
  );
};

export default HomePage;
