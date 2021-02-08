import React, { useState } from 'react';
import {
  CancelButton,
  ConfirmButton,
  ConfirmCancelWrapper,
  EditableLabel,
  EditableWrapper,
  EditButton,
} from '../../design';
import SelectComponent from '../../SelectComponent';
import { EditableSelectProps } from "../../@types";



const EditableSelect: React.FC<EditableSelectProps> = (props) => {
  const {
    label,
    confirmAction,
    cancelAction,
    formRef,
    options,
    defaultValue,
    onChange,
    ...otherProps
  } = props;
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState(defaultValue);

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

  const changeAction = (e: any) => {
    setValue(e.target.value);
    onChange && onChange(e);
  };

  return (
    <EditableWrapper className="editable-select">
      <EditableWrapper className={toggle ? 'focused' : undefined}>
        {label && <EditableLabel>{label}:</EditableLabel>}
        <SelectComponent
          formRef={formRef}
          options={options}
          {...otherProps}
          disabled={!toggle}
          defaultValue={defaultValue}
          onChange={changeAction}
        />
        <ConfirmCancelWrapper className={toggle ? 'show' : 'hide'}>
          <ConfirmButton
            onClick={confirm}
            className={'icon icon-correct'}
            type="submit"
          />
          <CancelButton
            onClick={cancel}
            className={'icon icon-cancel'}
            type="button"
          />
        </ConfirmCancelWrapper>
      </EditableWrapper>
      {!toggle && (
        <EditButton
          onClick={toggleConfirmCancel}
          className={'icon icon-edit'}
          type="button"
        />
      )}
    </EditableWrapper>
  );
};

export default EditableSelect;
