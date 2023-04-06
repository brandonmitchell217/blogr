import React from "react";
import Link from "next/link";
import Button from "./Button";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";

const copy = {
  title: "A modern publishing platform",
  subtitle: "Grow your audience and build your online brand",
  links: [
    { text: "Start for Free", href: "/" },
    { text: "Learn More", href: "/" },
  ],
};

const Hero = () => {
  const matches = useMediaQuery("(max-width: 768px)");
  return (
    <section className="text-white">
      <div className="relative w-full pt-40 pb-32 bg-gradient-to-br from-heroGradientRed1 to-heroGradientRed2 heroClip rounded-bl-[25%] flex flex-col items-center gap-8 overflow-hidden">
        <Image
          src={
            matches
              ? "/bg-pattern-intro-desktop.svg"
              : "/bg-pattern-intro-mobile.svg"
          }
          alt="a graphic pattern"
          width={800}
          height={800}
          className="absolute top-36 left- scale-[2.5]"
        />
        <div className="relative z-10 w-full flex flex-col items-center gap-10">
          <div className="space-y-4 text-center max-w-[62%]">
            <h1 className="text-4xl font-semibold">{copy.title}</h1>
            <p className="font-light px-6">{copy.subtitle}</p>
          </div>
          <div className="flex gap-3">
            <Button href={copy.links[0].href}>{copy.links[0].text}</Button>
            <Button href={copy.links[1].href} type="secondary">
              {copy.links[1].text}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
