import React from "react";
import Naavbar from "../components/Naavbar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="bg-[#c8d6e5] h-screen">
      <nav>
        <Naavbar />
      </nav>
      <main className="container mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
