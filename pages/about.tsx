import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout/Layout";

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Lenka Shynkarova - About</title>
        <meta name="description" content="About Lenka Shynarova" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div>About</div>
      </Layout>

      <footer></footer>
    </div>
  );
};

export default About;
