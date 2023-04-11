import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="">
        <main className="overflow-x-hidden">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
