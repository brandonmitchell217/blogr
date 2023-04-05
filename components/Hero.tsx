import React from "react";
import Link from "next/link";
import Button from "./Button";
import Image from "next/image";

const copy = {
  title: "A modern publishing platform",
  subtitle: "Grow your audience and build your online brand",
  links: [
    { text: "Start for Free", href: "/" },
    { text: "Learn More", href: "/" },
  ],
};

const Hero = () => {
  return (
    <section className="text-white font-overpass">
      <div className="relative pt-40 pb-32 bg-gradient-to-br from-heroGradientRed1 to-heroGradientRed2 heroClip rounded-bl-3xl flex flex-col items-center gap-8">
        <Image
          src={"/bg-pattern-intro-mobile.svg"}
          alt="a graphic pattern"
          width={800}
          height={800}
          className="absolute -bottom-48 left-36 -z-10 scale-[2.75] translate-x-6"
        />

        <div className="relative z-10 space-y-4 text-center px-24">
          <h1 className="text-4xl font-semibold">{copy.title}</h1>
          <p className="font-light px-8">{copy.subtitle}</p>
        </div>
        <div className="flex gap-3">
          <Button href={copy.links[0].href}>{copy.links[0].text}</Button>
          <Button href={copy.links[1].href} type="secondary">
            {copy.links[1].text}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
