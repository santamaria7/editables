import React from "react";
import "../design/styles.scss";
import type { InputProps } from "../@types";

const InputComponent: React.FC<InputProps> = (props) => {
  const { label, formRef, inline, ...otherProps } = props;
  return (
    <div
      className={`input-wrapper ${inline ? "inline" : ""}`}
    >
      {label && (
        <label
          className={`input-label ${props.className} ${inline ? "inline" : ""}`}
        >
          {label}
        </label>
      )}
      <input className="input" {...otherProps} ref={formRef} />
    </div>
  );
};

export default InputComponent;
