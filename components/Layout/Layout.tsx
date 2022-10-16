import Header from "../Header/Header";
import { FunctionComponent } from "react";
import Footer from "../Footer/Footer";

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-white">
      <Header />
      <main className="grow px-5 md:px-0 my-0 mx-auto max-w-screen-md">
        <div className="max-w-screen-xl my-0 mx-auto">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
