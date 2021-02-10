import React from 'react';
import "./design/styles.scss";
import { SelectProps } from "../../@types";


const SelectComponent: React.FC<SelectProps> = (props) => {
  const { label, formRef, options, defaultValue, ...otherProps } = props;
  return (
    <div className="select-wrapper">
      {label && <label className="select-label">{label}</label>}
      <select {...otherProps} ref={formRef} defaultValue={defaultValue}>
        {options.map((item, index) => (
          <option
            value={item.value}
            key={index}
            //TODO: find a solution to this issue
            //Although the browser shows errors and warnings on this,
            // removing it and doing what browser suggests is problematic
            // itself because the select won't show the value from the server
            selected={item.value === defaultValue}
          >
            {item.text || item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectComponent;
