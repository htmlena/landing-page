import { useState } from "react";
import type { NextPage } from "next";
import HeadComponent from "../components/HeadComponent/HeadComponent";
import Layout from "../components/Layout/Layout";
import MyWork from "../components/MyWork/MyWork";
import ProjectsData from "../components/ProjectsData/ProjectsData";

const Work: NextPage = () => {
  const [projectData, setProjectData] = useState(ProjectsData);

  return (
    <div>
      <HeadComponent
        title="Lenka Shynkarova - My Work"
        content="Lenka Shynkarova's work"
      />

      <Layout>
        <MyWork projectData={projectData} />
      </Layout>
    </div>
  );
};

export default Work;
