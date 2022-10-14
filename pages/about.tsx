import type { NextPage } from "next";
import HeadComponent from "../components/HeadComponent/HeadComponent";
import Layout from "../components/Layout/Layout";

const About: NextPage = () => {
  return (
    <div>
      <HeadComponent
        title="Lenka Shynkarova - About"
        content="About Lenka Shynarova"
      />

      <Layout>
        <div>About</div>
      </Layout>

      <footer></footer>
    </div>
  );
};

export default About;
