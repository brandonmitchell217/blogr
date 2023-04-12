import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../lib/navigation";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import React from "react";
import onClickFake from "../util/FakeClick";

const icons: { icon: React.ReactNode; href: string }[] = [
  { icon: <FaFacebook />, href: "/" },
  { icon: <FaTwitter />, href: "/" },
  { icon: <FaLinkedin />, href: "/" },
];

const Footer = () => {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <footer className="py-20 md:pl-8 bg-footBg text-white prose-headings:font-bold rounded-tr-cont">
        <div className="container flex flex-col gap-16 items-center md:flex-row md:items-start md:justify-start md:gap-32 lg:gap-44">
          <div className="flex flex-col items-center gap-4">
            <Link href={"/"}>
              <Image src={"logo.svg"} alt="Blogr Logo" width={90} height={90} />
            </Link>
            <div className="flex gap-6 items-center text-2xl md:text-xl lg:text-2xl border-t border-gray-200 pt-4">
              {icons.map((icon, index) => (
                <Link
                  key={index}
                  href={icon.href}
                  className="hover:text-redBtnHvr"
                  onClick={onClickFake}
                >
                  {icon.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:gap-20 lg:gap-44">
            {navLinks.map((link, index) => (
              <div key={index} className="space-y-5 text-center md:text-left">
                <h3 className="text-lg">{link.text}</h3>
                <ul className="flex flex-col gap-2 font-light text-footText">
                  {link.subLinks.map((subLink, subIndex) => (
                    <li key={subIndex}>
                      <Link href={subLink.href} className="hover:underline">
                        {subLink.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default Footer;
