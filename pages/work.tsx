import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout/Layout";

const MyWork: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Lenka Shynkarova - My Work</title>
        <meta name="description" content="Lenka Shynkarova's work" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div>Work</div>
      </Layout>

      <footer></footer>
    </div>
  );
};

export default MyWork;
