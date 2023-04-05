import React from "react";
import Nav from "../components/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="">
        <main className="">{children}</main>
      </div>
    </>
  );
};

export default Layout;