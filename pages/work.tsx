import type { NextPage } from "next";
import HeadComponent from "../components/HeadComponent/HeadComponent";
import Layout from "../components/Layout/Layout";

const MyWork: NextPage = () => {
  return (
    <div>
      <HeadComponent
        title="Lenka Shynkarova - My Work"
        content="Lenka Shynkarova's work"
      />

      <Layout>
        <div>Work</div>
      </Layout>

      <footer></footer>
    </div>
  );
};

export default MyWork;
