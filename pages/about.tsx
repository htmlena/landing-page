import type { NextPage } from "next";
import AboutMe from "../components/AboutMe/AboutMe";
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
        <AboutMe />
      </Layout>
    </div>
  );
};

export default About;
