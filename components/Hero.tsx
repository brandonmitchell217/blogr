import React from "react";
import Link from "next/link";

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
      <div className="pt-36 pb-12 bg-gradient-to-br from-heroGradientRed1 to-heroGradientRed2 heroClip rounded-bl-3xl flex flex-col items-center gap-8">
        <div className="text-center">
          <h1 className="text-4xl font-semibold">{copy.title}</h1>
          <p className="font-light">{copy.subtitle}</p>
        </div>
        <div className="flex gap-3">
          <Link href={copy.links[0].href}>{copy.links[0].text}</Link>
          <Link href={copy.links[1].href}>{copy.links[1].text}</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
