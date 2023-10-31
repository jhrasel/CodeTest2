import React from "react";

const ORInput = ({ type, name, value, placeholder }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className="w-full px-5 py-3 focus:outline-none"
      />
    </>
  );
};

export default ORInput;
