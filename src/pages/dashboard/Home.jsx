import React from "react";
import Menu from "../../components/menu/Menu";
import Watchlist from "../../components/Watchlist";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Menu />
      <div className="dashboard-container">
        <Watchlist />
        <div className="content">
          <Outlet />
        </div>
      </div>{" "}
    </div>
  );
};

export default Home;
