import React, { useState } from "react";

const MyInput = ({ type, value, placeholder, onChange, classname }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <input
        type={type}
        value={inputValue}
        placeholder={placeholder}
        onChange={handleInput}
        className={classname}
      />
    </>
  );
};

export default MyInput;
