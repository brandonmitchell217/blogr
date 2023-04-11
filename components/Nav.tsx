import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { navLinks } from "../lib/navigation";
import { useMediaQuery } from "usehooks-ts";
import { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const Nav = () => {
  const [isMatching, setIsMatching] = useState<boolean>();
  const matches = useMediaQuery("(max-width: 880px)");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [linkOpen, setLinkOpen] = useState<boolean[]>(() =>
    Array(navLinks.length).fill(false)
  );

  useEffect(() => {
    setIsMatching(matches);
  }, [matches]);

  const burgerMenu = () => {
    setIsOpen(!isOpen);
    setLinkOpen(Array(navLinks.length).fill(false));
  };

  const toggleLinkOpen = (index: number) => {
    setLinkOpen((prevState) => {
      const newState = Array(navLinks.length).fill(false);
      newState[index] = !prevState[index];
      return newState;
    });
  };

  const MobileNav = () => {
    return (
      <nav className="py-10 px-8 absolute top-0 left-0 z-40 w-full text-primary ">
        <div className="container flex justify-between items-center">
          <Link href={"/"}>
            <Image src={"logo.svg"} alt="Blogr Logo" width={75} height={75} />
          </Link>
          <div
            className="cursor-pointer text-3xl text-white"
            onClick={burgerMenu}
          >
            {!isOpen ? <FaBars /> : <AiOutlineClose />}
          </div>

          <div
            className={`absolute top-24 left-1/2 -translate-x-1/2 p-6 w-[90%] font-ubuntu rounded-lg bg-white shadow-2xl ${
              isOpen ? "block" : "hidden"
            } flex flex-col justify-center items-center`}
          >
            <ul className="w-full flex flex-col justify-center items-center">
              {navLinks.map((link, index) => (
                <li key={index} className="p-4 w-full text-center">
                  <p
                    className={`cursor-pointer flex items-center justify-center gap-3 font-bold ${
                      linkOpen[index] ? "text-gray-500" : "text-inherit"
                    }`}
                    onClick={() => toggleLinkOpen(index)}
                  >
                    {link.text}
                    <span
                      className={`${
                        linkOpen[index] ? "rotate-180" : "rotate-0"
                      } text-redBtn`}
                    >
                      <MdKeyboardArrowDown />
                    </span>
                  </p>
                  <div
                    className={`mt-4 py-6 w-full ${
                      linkOpen[index] ? "flex" : "hidden"
                    } flex-col bg-gray-100 space-y-4 font-bold text-gray-500 rounded-md`}
                  >
                    {link.subLinks.map((subLink, subIndex) => (
                      <Link key={subIndex} href={subLink.href}>
                        {subLink.text}
                      </Link>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 w-full flex flex-col gap-2 items-center border-t border-gray-200">
              <Button
                href={"/"}
                type="secondary"
                className="border-none text-primary"
              >
                Login
              </Button>
              <Button
                href={"/"}
                type="primary"
                nav={true}
                className="bg-gradient-to-r from-heroGradientRed1 to-heroGradientRed2"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </nav>
    );
  };

  if (isMatching) {
    return <MobileNav />;
  } else {
    return (
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="py-4 px-8 absolute top-0 left-0 z-50 w-full text-white flex justify-between items-center"
      >
        <div className="flex items-center space-x-12 container">
          <Link href={"/"}>
            <Image src={"logo.svg"} alt="Blogr Logo" width={100} height={100} />
          </Link>
          <div className="relative font-ubuntu">
            <ul className="flex items-center space-x-12">
              {navLinks.map((link, index) => (
                <li key={index} className="flex gap-2">
                  <p
                    className="cursor-pointer flex items-center gap-3 font-ubuntu"
                    onClick={() => toggleLinkOpen(index)}
                  >
                    {link.text}
                    <span
                      className={`${
                        linkOpen[index] ? "rotate-0" : "rotate-180"
                      }`}
                    >
                      <MdKeyboardArrowDown />
                    </span>
                  </p>
                  <div
                    className={`${
                      linkOpen[index] ? "absolute" : "hidden"
                    } top-8 flex flex-col gap-4 w-56 bg-white p-8 text-primary rounded-md shadow-md`}
                  >
                    {link.subLinks.map((subLink, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subLink.href}
                        className="hover:font-bold"
                      >
                        {subLink.text}
                      </Link>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <Button href={"/"} type="secondary" login={true}>
            Login
          </Button>
          <Button href={"/"} type="primary">
            Sign Up
          </Button>
        </div>
      </motion.nav>
    );
  }
};

export default Nav;
