import Image from "next/image";
import { motion } from "framer-motion";
interface ImageTextProps {
  title: string;
  desc: string;
  image: string;
}

const ImageText = ({ title, desc, image }: ImageTextProps) => {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <section className="mt-48 mb-0 lg:my-20 bg-gradient-to-b from-bodyGradientBlue1 to-bodyGradientBlue2 relative z-[1] rounded-bl-cont rounded-tr-cont md:h-[100%] lg:h-[400px] flex justify-center items-center">
        <div className="h-full w-full absolute top-0 left-0 overflow-hidden">
          <Image
            src={"bg-pattern-circles.svg"}
            alt="circles background"
            fill
            className="circle"
          />
        </div>
        <div className="relative z-10 text-center lg:text-left flex flex-col items-center pb-36 px-8 lg:pb-0 lg:flex-row container">
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
          <div className="text-white space-y-3 lg:pl-12">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="lg:max-w-[85%] text-sm font-ubuntu leading-relaxed">
              {desc}
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ImageText;
