import Link from "next/link";
import React from "react";

interface ButtonProps {
  href: string;
  className?: string;
  children: React.ReactNode;

  type?: "primary" | "secondary";
}

const Button = ({
  href,
  className = "",
  children,

  type = "primary",
}) => {
  const primary = "bg-white text-redBtn";
  const secondary = "bg-transparent text-white";

  return (
    <Link
      href={href}
      className={`${
        type === "primary" ? primary : secondary
      } text-center w-40 py-3 border border-white rounded-full font-ubuntu font-bold ${className}`}
    >
      {children}
    </Link>
  );
};

export default Button;
