import React from "react";
import { Input } from "reactstrap";

const InputComponent = ({
  type = "text",
  className = "",
  value = "",
  name = "",
  onChange = "",
  placeholder = "Ini form input",
  style = "",
}) => {
  return (
    <>
      <Input
        type={type}
        className={className}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        style={style}
      />
    </>
  );
};

export default InputComponent;
