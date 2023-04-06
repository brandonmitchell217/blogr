import React, {
  HTMLAttributes,
  HtmlHTMLAttributes,
  MutableRefObject,
} from "react";
import Head from "next/head";
import { Title } from "../components/Title";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Hero from "../components/Hero";
import InfoSplit from "../components/InfoSplit";
import ImageText from "../components/ImageText";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const targetSection = React.useRef(null);

  // const lists = {
  //   first: {
  //     title: "Introducing an extensible editor",
  //     desc: "Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.",
  //   },
  //   second: {
  //     title: "Robust content management",
  //     desc: "Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control.",
  //   },
  // };

  const lists1 = [
    {
      title: "Introducing an extensible editor",
      desc: "Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.",
    },
    {
      title: "Robust content management",
      desc: "Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control.",
    },
  ];

  const ImageTextContent = {
    title: "State of the Art Infrastructure",
    desc: "With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.",
    image: "/illustration-phones.svg",
  };

  const lists2 = [
    {
      title: "Free, open, simple",
      desc: "Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.",
    },
    {
      title: "Powerful tooling",
      desc: "Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.",
    },
  ];

  return (
    <>
      <Hero />
      <InfoSplit
        title="Designed for the future"
        lists={lists1}
        image={"/illustration-editor-mobile.svg"}
        direction="row"
      />
      <ImageText
        title={ImageTextContent.title}
        desc={ImageTextContent.desc}
        image={ImageTextContent.image}
      />
      <InfoSplit
        lists={lists2}
        image={"/illustration-laptop-mobile.svg"}
        direction="reverse"
      />
    </>
  );
}
