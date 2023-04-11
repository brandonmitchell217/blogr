import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../lib/navigation";

const Footer = () => {
  return (
    <footer className="py-20 pl-8 bg-footBg text-white prose-headings:font-bold rounded-tr-cont">
      <div className="container flex flex-col gap-16 items-center md:flex-row md:items-start md:justify-start md:gap-32 lg:gap-44">
        <Link href={"/"}>
          <Image src={"logo.svg"} alt="Blogr Logo" width={90} height={90} />
        </Link>
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
  );
};

export default Footer;
