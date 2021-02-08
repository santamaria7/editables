import React, { useState } from 'react';
import '../design/styles.scss';
import type { EditableInputProps } from "../../@types";



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
    <div className="edit-box-wrapper">
      <div className={`editable-wrapper ${toggle ? 'focused' : ''}`}>
        {label && <label className="editable-label">{label}:</label>}
        <input
            className="edit-box"
          {...otherProps}
          ref={formRef}
          readOnly={!toggle}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <div className={`confirmCancelWrapper ${toggle ? 'show' : 'hide'}`}>
          <button
            onClick={confirm}
            type="submit"
            className="confirm-button"
          />
          <button
            onClick={cancel}
            type="button"
            className="cancel-button"
          />
        </div>
      </div>
      {!toggle && (
        <button
          onClick={toggleConfirmCancel}
          className="edit-button"
          type="button"
          disabled={!canEdit}
        />
      )}
    </div>
  );
};

export default EditableInput;
