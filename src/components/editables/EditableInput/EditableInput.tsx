import React from "react";
import "../design/styles.scss";
import type { EditableInputProps } from "../../@types";
import EditableWrapper from "../EditableWrapper";

const EditableInput: React.FC<EditableInputProps> = (props) => {
  const {
    label,
    confirmAction,
    cancelAction,
    formRef,
    canEdit = true,
    ...otherProps
  } = props;

  return (
    <EditableWrapper
      label={label}
      confirmAction={confirmAction}
      cancelAction={cancelAction}
      canEdit={canEdit}
      defaultValue={(otherProps.value || otherProps.defaultValue) as string}
    >
      <input className="edit-box" {...otherProps} ref={formRef} />
    </EditableWrapper>
  );
};

export default EditableInput;
