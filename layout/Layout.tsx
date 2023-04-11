import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { motion, useScroll } from "framer-motion";

const Layout = ({ children }) => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <Nav />
      <div className="">
        <main className="overflow-x-hidden relative">
          <motion.div
            style={{
              scaleX: scrollYProgress,
              height: "12px",
              transformOrigin: "left",
              backgroundColor: "hsl(240, 10%, 16%)",
            }}
            className="w-screen fixed z-50 top-0 left-0"
          />
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
