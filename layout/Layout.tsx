import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { motion, useScroll } from "framer-motion";

const Layout = ({ children }) => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          height: "12px",
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 100,
          transformOrigin: "left",
          background:
            "linear-gradient(90deg, hsl(237, 17%, 21%) 25%, hsl(237, 23%, 32%) 50%, hsl(13, 100%, 72%) 75%, hsl(353, 100%, 62%) 100%)",
        }}
      />
      <Nav />
      <div className="">
        <main className="overflow-x-hidden relative">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
