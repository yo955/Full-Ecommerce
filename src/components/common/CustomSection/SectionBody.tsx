import React from "react";
interface Component {
  children: React.ReactNode;
  className?: string;
}
const SectionBody = ({ children }: Component) => {
  return <div>{children}</div>;
};

export default SectionBody;
