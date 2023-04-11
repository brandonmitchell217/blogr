import Link from "next/link";
import React from "react";

interface ButtonProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  type?: "primary" | "secondary";
  login?: boolean;
}

const Button = ({
  href,
  className = "",
  children,
  type = "primary",
  login = false,
}: ButtonProps) => {
  const primary =
    "bg-white text-redBtn border-white hover:bg-redBtnHvr hover:border-redBtnHvr hover:text-white";
  const secondary = `bg-transparent text-white ${
    login
      ? "border-none hover:text-white hover:bg-transparent hover:border-transparent hover:scale-105"
      : "border-white hover:bg-white hover:text-redBtn"
  }`;

  return (
    <Link
      href={href}
      className={`${
        type === "primary" ? primary : secondary
      } text-center w-40 py-3 border  rounded-full font-ubuntu font-bold transition-all ${className}`}
    >
      {children}
    </Link>
  );
};

export default Button;
