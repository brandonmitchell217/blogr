import Image from "next/image";
import React from "react";

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
  listTitle1,
  listDesc1,
  listTitle2,
  listDesc2,
  lists = [],
  image,
  direction = "row",
}: InfoSplitProps) => {
  return (
    <section>
      <div className="text-center">
        {title && <h1>{title}</h1>}
        <div
          className={`flex flex-col-reverse items-center ${
            direction === "row" ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          <div>
            {lists.map((list, k) => (
              <div key={k}>
                <h2>{list.title}</h2>
                <p>{list.desc}</p>
              </div>
            ))}
          </div>
          <div>
            <Image
              src={image}
              alt="illustration image"
              width={450}
              height={450}
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
