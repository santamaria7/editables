import React from 'react';
import {
  Input,
  InputLabel,
  InputWrapper,
} from '../design';



const InputComponent: React.FC<InputProps> = (props) => {
  const { label, formRef, inline, wrapperClassName, ...otherProps } = props;
  return (
    <InputWrapper
      className={`input-wrapper ${inline ? 'inline' : ''} ${
        wrapperClassName || ''
      }`}
    >
      {label && (
        <InputLabel className={`${props.className} ${inline ? 'inline' : ''}`}>
          {label}
        </InputLabel>
      )}
      <Input {...otherProps} ref={formRef} />
    </InputWrapper>
  );
};

export default InputComponent;
