import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function SharedLayout() {
  return (
    <>
      <Navbar />
      <section className="section">
        <Outlet />
      </section>
    </>
  );
}

export default SharedLayout;
