import React from "react";
interface ParaProps {
  children: React.ReactNode;
  className?:string;
}
export const CustomPara: React.FC<ParaProps> = ({ children,className }) => {
  return <p className={className}>{children}</p>;
};
