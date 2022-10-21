import { FunctionComponent } from "react";

export type BottomSectionContainerProps = {
  heading: string;
  children: React.ReactNode;
};

const BottomSectionContainer: FunctionComponent<
  BottomSectionContainerProps
> = ({ heading, children }) => {
  return (
    <div className="flex flex-col mt-14 md:mt-20">
      <div>
        <h2 className="text-3xl">{heading}</h2>
      </div>
      {children}
    </div>
  );
};

export default BottomSectionContainer;
