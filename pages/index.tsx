import type { NextPage } from "next";
import Image from "next/image";
import HeadComponent from "../components/HeadComponent/HeadComponent";
import Layout from "../components/Layout/Layout";

const Home: NextPage = () => {
  return (
    <div>
      <HeadComponent
        title="Lenka Shynkarova"
        content="Lenka Shynkarova's landing page"
      />

      <Layout>
        <h1>Lenka Shynkarova</h1>
        <p>This is a very descriptive explanation of Lenka's experience</p>
      </Layout>

      <footer></footer>
    </div>
  );
};

export default Home;
