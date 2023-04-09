import Image from "next/image";
import React from "react";

interface ImageTextProps {
  title: string;
  desc: string;
  image: string;
}

const ImageText = ({ title, desc, image }: ImageTextProps) => {
  return (
    <section className="mt-48 mb-0 lg:mb-12 bg-gradient-to-b from-bodyGradientBlue1 to-bodyGradientBlue2 relative z-[1] rounded-bl-[80px] rounded-tr-[80px] md:h-[100%] lg:h-[400px] flex justify-center items-center">
      <div className="h-full w-full absolute top-0 left-0 overflow-hidden">
        <Image
          src={"bg-pattern-circles.svg"}
          alt="circles background"
          fill
          className="circle"
        />
      </div>
      <div className="relative z-10 text-center lg:text-left flex flex-col items-center pb-60 px-8 lg:pb-0 lg:flex-row container">
        <div className="-mt-44 lg:mt-0">
          <Image
            src={image}
            alt="a mockup of blogr on a phone"
            width={800}
            height={800}
            placeholder="blur"
            blurDataURL={image}
            className="lg:scale-[1.15]"
          />
        </div>
        <div className="prose-headings:text-5xl text-white prose-headings:font-bold space-y-3 lg:pl-12">
          <h1>{title}</h1>
          <p className="lg:max-w-[85%]">{desc}</p>
        </div>
      </div>
    </section>
  );
};

export default ImageText;
