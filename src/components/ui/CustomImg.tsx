import React from "react";
import Image from "next/image";
interface ImageProps {
  src: string;
  alt: string;
}
const CustomImg: React.FC<ImageProps> = ({ src, alt }) => {
  return (
    <div>
      <Image src={src} alt={alt} width={150} height={150} />
    </div>
  );
};

export default CustomImg;
