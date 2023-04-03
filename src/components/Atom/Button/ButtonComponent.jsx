import React from "react";
import { Button } from "reactstrap";

const ButtonComponent = ({
  color = "primary",
  text,
  onClick = "",
  className = "",
}) => {
  return (
    <>
      <Button color={color} onClick={onClick} className={className}>
        {text}
      </Button>
    </>
  );
};

export default ButtonComponent;
