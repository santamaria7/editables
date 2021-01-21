import React, { useState } from 'react';
import {
  CancelButton,
  ConfirmButton,
  ConfirmCancelWrapper,
  EditableLabel,
  EditableWrapper,
  EditBox,
  EditButton,
  EditableInputWrapper,
} from '../design';
import type { EditableInputProps } from "../@types";



const EditableInput: React.FC<EditableInputProps> = (props) => {
  const {
    label,
    confirmAction,
    cancelAction,
    formRef,
    canEdit = true,
    ...otherProps
  } = props;
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState('');
  const toggleConfirmCancel = () => {
    setToggle((prevState) => !prevState);
  };
  const confirm = () => {
    toggleConfirmCancel();
    confirmAction && confirmAction(value);
  };

  const cancel = () => {
    toggleConfirmCancel();
    cancelAction && cancelAction();
  };

  return (
    <EditableInputWrapper>
      <EditableWrapper className={toggle ? 'focused' : undefined}>
        {label && <EditableLabel>{label}:</EditableLabel>}
        <EditBox
          {...otherProps}
          ref={formRef}
          readOnly={!toggle}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <ConfirmCancelWrapper className={toggle ? 'show' : 'hide'}>
          <ConfirmButton
            onClick={confirm}
            type="submit"
            className={'icon icon-correct'}
          />
          <CancelButton
            onClick={cancel}
            type="button"
            className={'icon icon-cancel'}
          />
        </ConfirmCancelWrapper>
      </EditableWrapper>
      {!toggle && (
        <EditButton
          onClick={toggleConfirmCancel}
          className="icon icon-edit"
          type="button"
          disabled={!canEdit}
        />
      )}
    </EditableInputWrapper>
  );
};

export default EditableInput;
