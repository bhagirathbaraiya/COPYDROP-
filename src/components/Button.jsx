import React from "react";
import "../Styles/Button.css"; 

const Button = ({ onClick, children, primary,receive }) => (
  <button
    onClick={onClick}
    className={`button ${primary ? "button-primary" : ""}`}
  >
    {children}
  </button>
);

export default Button;
