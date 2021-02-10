import React from "react";
import SelectComponent from "../../base/SelectComponent";
import { EditableSelectProps } from "../../@types";
import EditableWrapper from "../../base/EditableWrapper";

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

  return (
    <EditableWrapper
      label={label}
      confirmAction={confirmAction}
      cancelAction={cancelAction}
      onChange={onChange}
      defaultValue={defaultValue as string}
    >
      <SelectComponent
        formRef={formRef}
        options={options}
        {...otherProps}
      />
    </EditableWrapper>
  );
};

export default EditableSelect;
