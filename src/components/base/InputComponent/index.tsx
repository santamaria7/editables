import React from "react";
import type { InputProps } from "../../@types";

const InputComponent: React.FC<InputProps> = (
  props
) => {
  return <input {...props} />;
};

export default InputComponent;
