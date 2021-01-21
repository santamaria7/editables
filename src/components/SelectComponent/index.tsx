import React from 'react';
import { Label, Select, SelectWrapper } from "../design";
import { SelectProps } from "../@types";


const SelectComponent: React.FC<SelectProps> = (props) => {
  const { label, formRef, options, defaultValue, ...otherProps } = props;
  return (
    <SelectWrapper className="select-wrapper">
      {label && <Label>{label}</Label>}
      <Select {...otherProps} ref={formRef} defaultValue={defaultValue}>
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
      </Select>
    </SelectWrapper>
  );
};

export default SelectComponent;
