import React from "react";
import Image from "next/image";
interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}
const CustomImg: React.FC<ImageProps> = ({ src, alt, width, height }) => {
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full"
      />
    </div>
  );
};

export default CustomImg;
