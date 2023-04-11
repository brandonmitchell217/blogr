import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

interface InfoSplitProps {
  title?: string;
  listTitle1?: string;
  listDesc1?: string;
  listTitle2?: string;
  listDesc2?: string;
  lists?: {
    title: string;
    desc: string;
  }[];
  image: string;
  direction?: "reverse" | "row";
}

const InfoSplit = ({
  title = "",
  lists = [],
  image,
  direction = "row",
}: InfoSplitProps) => {
  const matches = useMediaQuery("(max-width: 768px)");
  const [isMatches, setIsMatches] = useState<boolean>();

  useEffect(() => {
    matches ? setIsMatches(true) : setIsMatches(false);
  }, [matches]);

  return (
    <section className="text-primary prose-headings:font-bold min-h-[80vh] py-32 md:py-42">
      {title && (
        <h1 className="mb-16 md:mb-28 text-center text-2xl md:text-3xl lg:text-4xl">
          {title}
        </h1>
      )}
      <div className="text-center relative h-full">
        {/* Where you can control 'container' padding */}
        <div
          className={`h-full flex flex-col-reverse items-center gap-8 md:px-24 ${
            direction === "row" ? "lg:flex-row" : "lg:flex-row-reverse"
          }`}
        >
          <div
            className={`px-8 space-y-8 lg:w-1/2 ${
              direction === "row" ? "lg:ml-12" : "lg:mr-12"
            }`}
          >
            {lists.map((list, k) => (
              <div key={k} className="space-y-2 lg:text-left lg:space-y-4">
                <h2 className="text-xl md:text-2xl">{list.title}</h2>
                <p className="text-gray-500 leading-6">{list.desc}</p>
              </div>
            ))}
          </div>
          <div
            className={`lg:absolute lg:h-full lg:-top-[88px] ${
              direction != "row" ? "lg:-left-[160px]" : "lg:-right-[100px]"
            }`}
          >
            <Image
              src={image}
              alt="illustration image"
              width={isMatches ? 450 : 700}
              height={isMatches ? 450 : 700}
              placeholder="blur"
              blurDataURL={image}
              className={`${direction != "row" ? "lg:scale-[1.2]" : null}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSplit;
