import Image from "next/image";
import React from "react";

const ORImage = ({ image, width, height, alt, className }) => {
  return (
    <Image
      src={image}
      width={width}
      height={height}
      alt={alt}
      className={className}
    />
  );
};

export default ORImage;
