import type { NextPage } from "next";
import HeadComponent from "../components/HeadComponent/HeadComponent";
import Layout from "../components/Layout/Layout";
import MyWork from "../components/MyWork/MyWork";

const Work: NextPage = () => {
  return (
    <div>
      <HeadComponent
        title="Lenka Shynkarova - My Work"
        content="Lenka Shynkarova's work"
      />

      <Layout>
        <MyWork />
      </Layout>
    </div>
  );
};

export default Work;
