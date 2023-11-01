import React from "react";

const ORInput = ({ type, name, value, placeholder, classNeme }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className={`w-full px-5 py-3 focus:outline-none ${classNeme}`}
      />
    </>
  );
};

export default ORInput;
