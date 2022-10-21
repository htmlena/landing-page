import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          property="og:title"
          content="Lenka Shynkarova - Junior frontend developer"
        />
        <meta
          property="og:image"
          content="https://htmlena.dev/img/photo5778626709061482195.jpg"
        />
        <meta
          property="og:description"
          content="A junior frontend developer with over 1 year of commercial experience..."
        />
        <meta
          property="og:url"
          content="https://landing-page-shynkarova.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
