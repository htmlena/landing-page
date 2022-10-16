import type { NextPage } from "next";
import Image from "next/image";
import HeadComponent from "../components/HeadComponent/HeadComponent";
import HomeTeaser from "../components/HomeTeaser/HomeTeaser";
import Layout from "../components/Layout/Layout";

const Home: NextPage = () => {
  return (
    <div>
      <HeadComponent
        title="Lenka Shynkarova"
        content="Lenka Shynkarova's landing page"
      />
      <Layout>
        <HomeTeaser />
      </Layout>
    </div>
  );
};

export default Home;
