import React from "react";
interface ParaProps {
  children: React.ReactNode;
}
export const CustomPara: React.FC<ParaProps> = ({ children }) => {
  return <p>{children}</p>;
};
