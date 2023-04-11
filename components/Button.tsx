import Link from "next/link";
import React from "react";
import onClickFake from "../util/FakeClick";

interface ButtonProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  type?: "primary" | "secondary";
  login?: boolean;
  nav?: boolean;
}

const Button = ({
  href,
  className = "",
  children,
  type = "primary",
  login = false,
  nav = false,
}: ButtonProps) => {
  const primary = `bg-white ${
    nav ? "text-white" : "text-redBtn"
  } border-white hover:bg-redBtnHvr hover:border-redBtnHvr hover:text-white`;
  const secondary = `bg-transparent text-white ${
    login
      ? "border-none hover:text-white hover:bg-transparent hover:border-transparent hover:scale-105 hover:text-footText"
      : "border-white hover:bg-white hover:text-redBtn"
  }`;

  return (
    <Link
      href={href}
      className={`${
        type === "primary" ? primary : secondary
      } text-center w-40 py-3 border rounded-full font-ubuntu font-bold transition-all ${className}`}
      onClick={onClickFake}
    >
      {children}
    </Link>
  );
};

export default Button;
