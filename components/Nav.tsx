import Link from "next/link";
import Image from "next/image";
import React from "react";

const MobileNav = () => {
  return (
    <nav className="p-4 absolute top-0 left-0 z-50 w-full text-white">
      <Link href={"/"}>
        <Image src={"logo.svg"} alt="Blogr Logo" width={75} height={75} />
      </Link>
      <div className="cursor-pointer">
        <Image
          src={"icon-hamburger.svg"}
          alt="Menu button"
          width={25}
          height={25}
        />
      </div>
    </nav>
  );
};

const Nav = () => {
  return (
    <nav className="p-4 absolute top-0 left-0 z-50 w-full text-white">
      <Link href={"/"}>
        <Image src={"logo.svg"} alt="Blogr Logo" width={100} height={100} />
      </Link>

      <ul className="flex gap-8">
        <li>
          <Link href={"/"}>Product</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
