import React from "react";

const ORContainer = ({ children, className }) => {
  return <div className={`container mx-auto ${className}`}>{children}</div>;
};

export default ORContainer;
