import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
};
const Container = ({ children }: TContainerProps) => {
  return <div className="bg-white min-h-screen ">{children}</div>;
};

export default Container;
