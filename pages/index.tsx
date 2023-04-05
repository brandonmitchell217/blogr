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

  return (
    <>
      <Hero />
      <InfoSplit />
      <ImageText />
    </>
  );
}
