// index.js
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Routers, Routes } from "react-router-dom";
import "./index.scss";
import { App } from "./App/App";
import MainFlex from "./components/MainFlex/MainFlex";
import Hiro from "./components/AR/Hiro";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Routers>
      <MainFlex>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/AR" element={<Hiro color={"black"} metal={"gold"} material={"Fabric"}/>} />
        </Routes>
      </MainFlex>
    </Routers>
  </React.StrictMode>
);
