import React from "react";
import { Button as StyledButton } from "./styles.js";

const Button = function (props) {
  const { type = "button", onClick, children } = props;

  return (
    <StyledButton type={type} onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
