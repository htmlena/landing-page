import Head from "next/head";
import { FunctionComponent } from "react";

export type HeadComponentProps = {
  title: string;
  content: string;
};

const HeadComponent: FunctionComponent<HeadComponentProps> = ({
  title,
  content,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={content} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadComponent;
