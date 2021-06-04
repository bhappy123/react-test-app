import React from "react";
import "./Button.css";
const Button = ({ type, text, icon, bgColor, textColor }) => {
  return (
    <button
      className={
        type
          ? `btn ${type} ${bgColor} ${textColor}`
          : `btn ${bgColor} ${textColor}`
      }
    >
      {text}
      {icon && <i className={icon}></i>}
    </button>
  );
};

export default Button;
