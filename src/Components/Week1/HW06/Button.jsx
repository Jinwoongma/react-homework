import React from "react";
import "./Button.css";

const Button = ({ disabled, children, ...rest }) => {
  return (
    <button
      className={`login-button ${disabled ? "button-disabled" : ""}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
