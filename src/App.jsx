import "./App.css";
import "./index.css";
import "./Style.css";
import React from "react";

import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Pricing from "./pages/Pricing/Pricing";
import Support from "./pages/Support/Support";
import Calucaltor from "./pages/Calculator/Calculator";
import Homepage from "./pages/Home/Homepage";
import Home from "./pages/Dashboard/Home";
import Orders from "./pages/Dashboard/Orders";
import Holding from "./pages/Dashboard/Holding";
import Positions from "./pages/Dashboard/Positions";
import Funds from "./pages/Dashboard/Funds";
import Summary from "./pages/Dashboard/Summary";
import Login from "./pages/login/Login";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/support" element={<Support />}></Route>
          <Route path="/calculate" element={<Calucaltor />}></Route>
          <Route path="/" element={<Home />}>
            <Route path="/dashboard" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holding" element={<Holding />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/summary" element={<Summary />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
