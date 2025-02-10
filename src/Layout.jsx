import React from "react";
import Header from "./components/Header";
import HeaderNav from "./components/HeaderNav";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderNav />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
