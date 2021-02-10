import React from "react";
import "../design/styles.scss";
import type { EditableInputProps } from "../../@types";
import EditableWrapper from "../../base/EditableWrapper";
import InputComponent from "../../base/InputComponent";

const EditableInput: React.FC<EditableInputProps> = (props) => {
  const {
    label,
    confirmAction,
    cancelAction,
    formRef,
    canEdit = true,
    defaultValue,
    value,
    ...otherProps
  } = props;
  return (
    <EditableWrapper
      label={label}
      confirmAction={confirmAction}
      cancelAction={cancelAction}
      canEdit={canEdit}
      defaultValue={(value || defaultValue) as string}
    >
      <InputComponent className="edit-box" {...otherProps} ref={formRef} />
    </EditableWrapper>
  );
};

export default EditableInput;
