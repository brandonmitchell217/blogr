import React, {
  HTMLAttributes,
  HtmlHTMLAttributes,
  MutableRefObject,
} from "react";
import Head from "next/head";
import { Title } from "../components/Title";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const targetSection = React.useRef(null);

  return (
    <>
      <section className="h-screen flex justify-center items-center">
        <h1 className="text-5xl text-red-600">Title 1</h1>
      </section>
      <section className="h-screen flex justify-center items-center">
        <Title>Title 2</Title>
      </section>
    </>
  );
}
