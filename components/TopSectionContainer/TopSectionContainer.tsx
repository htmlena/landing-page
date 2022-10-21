import { FunctionComponent } from "react";

export type TopSectionContainerProps = {
  children: React.ReactNode;
};

const TopSectionContainer: FunctionComponent<TopSectionContainerProps> = ({
  children,
}) => {
  return (
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 mt-14 md:mt-20">
      {children}
      </div>
  );
};

export default TopSectionContainer;
