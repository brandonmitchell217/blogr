import Image from "next/image";
import React from "react";

interface ImageTextProps {
  title: string;
  desc: string;
  image: string;
}

const ImageText = ({ title, desc, image }: ImageTextProps) => {
  return (
    <section className="mt-56 bg-gradient-to-b from-bodyGradientBlue1 to-bodyGradientBlue2 relative z-[1] rounded-bl-[20%] rounded-tr-[20%] md:h-[380px] lg:h-[400px] flex justify-center items-center">
      <div className="h-full w-full absolute top-0 left-0 overflow-hidden">
        <Image
          src={"bg-pattern-circles.svg"}
          alt="circles background"
          fill
          className="circle"
        />
      </div>
      <div className="relative z-10 text-center md:text-left flex flex-col items-center pb-60 px-8 md:pb-0 md:flex-row">
        <div className="-mt-44 md:mt-0">
          <Image
            src={image}
            alt="a mockup of blogr on a phone"
            width={800}
            height={800}
          />
        </div>
        <div className="prose-headings:text-5xl text-white prose-headings:font-bold space-y-3">
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
      </div>
    </section>
  );
};

export default ImageText;
