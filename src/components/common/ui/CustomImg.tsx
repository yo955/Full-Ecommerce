import React from "react";
import Image from "next/image";
interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}
const CustomImg: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
}) => {
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    </div>
  );
};

export default CustomImg;
