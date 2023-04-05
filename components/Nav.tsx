import Link from "next/link";
import Image from "next/image";
import React from "react";

const Nav = () => {
  return (
    <nav className="p-4 absolute top-0 left-0 z-50 w-full text-white">
      <Link href={"/"}>
        <Image src={"logo.svg"} alt="Blogr Logo" width={100} height={100} />
      </Link>
    </nav>
  );
};

export default Nav;
