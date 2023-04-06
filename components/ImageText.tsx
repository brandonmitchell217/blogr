import Image from "next/image";
import React from "react";

interface ImageTextProps {
  title: string;
  desc: string;
  image: string;
}

const ImageText = ({ title, desc, image }: ImageTextProps) => {
  return (
    <section>
      <div className="text-center">
        <h1>{title}</h1>
        <p>{desc}</p>
        <Image
          src={image}
          alt="a mockup of blogr on a phone"
          width={400}
          height={400}
        />
      </div>
    </section>
  );
};

export default ImageText;
