import Image from "next/image";
import React from "react";
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
  return (
    <section className="text-primary prose-headings:font-bold prose-headings:text-2xl prose-headings:md:text-3xl prose-p:text-gray-500 prose-p:leading-6">
      <div className="text-center py-16 px-8 container">
        {title && <h1 className="mb-8">{title}</h1>}
        <div
          className={`flex flex-col-reverse items-center gap-8 ${
            direction === "row" ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          <div className="space-y-8 md:w-1/2">
            {lists.map((list, k) => (
              <div key={k} className="space-y-2 md:text-left md:space-y-4">
                <h2>{list.title}</h2>
                <p>{list.desc}</p>
              </div>
            ))}
          </div>
          <div className="md:w-1/2">
            <Image
              src={image}
              alt="illustration image"
              width={matches ? 450 : 600}
              height={matches ? 450 : 600}
              placeholder="blur"
              blurDataURL={image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSplit;
