import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout/Layout";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Lenka Shynkarova</title>
        <meta name="description" content="Lenka Shynkarova's landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1>Lenka Shynkarova</h1>
        <p>This is a very discriptive explanation of Lenka's experience</p>
      </Layout>

      <footer></footer>
    </div>
  );
};

export default Home;
