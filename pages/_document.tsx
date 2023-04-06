import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon" href="favicon.png" />
        <meta name="description" content="Blogr" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <link
          href="https://fonts.googleapis.com/css2?family=Overpass:wght@300;600&family=Ubuntu:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-white font-overpass">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
