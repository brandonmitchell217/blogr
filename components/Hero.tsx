import Button from "./Button";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";

type CopyProps = {
  title: string;
  subtitle: string;
  links: { text: string; href: string }[];
};

const copy: CopyProps = {
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
    <section className="text-white  prose-headings:font-bold prose-p:font-light prose-p:lg:text-lg">
      <div className="relative w-full min-h-[65vh] px-8 pt-40 pb-32 bg-gradient-to-br from-heroGradientRed1 to-heroGradientRed2 rounded-bl-cont flex flex-col items-center gap-8 overflow-hidden">
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
        <div className="relative z-10 w-full flex flex-col items-center gap-10 container">
          <div className="space-y-4 text-center sm:max-w-[75%] lg:max-w-full">
            <h1 className="text-4xl lg:text-6xl">{copy.title}</h1>
            <p className="x-6 lg:text-xl text-gray-100">{copy.subtitle}</p>
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
