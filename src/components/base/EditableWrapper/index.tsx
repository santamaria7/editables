import React, {
  InputHTMLAttributes,
  ReactElement,
  SelectHTMLAttributes,
  useState,
} from "react";
import "../../editables/design/styles.scss";

type EditableWrapperChild =
  | InputHTMLAttributes<HTMLInputElement>
  | SelectHTMLAttributes<HTMLSelectElement>;

type WrapperType = {
  label?: string;
  canEdit?: boolean;
  confirmAction?: Function;
  cancelAction?: Function;
  onChange?: Function;
  defaultValue: string;
  children: ReactElement;
};

const EditableWrapper: React.FC<WrapperType> = (props) => {
  const {
    label,
    confirmAction,
    cancelAction,
    onChange,
    canEdit = true,
    defaultValue,
    children,
  } = props;
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState(defaultValue || "");
  const toggleConfirmCancel = () => {
    setToggle((prevState) => !prevState);
  };
  const confirm = (e: any) => {
    e.preventDefault();
    toggleConfirmCancel();
    confirmAction && confirmAction(value);
  };

  const cancel = () => {
    toggleConfirmCancel();
    setValue(defaultValue);
    cancelAction && cancelAction();
  };

  const changeAction = (e: any) => {
    setValue(e.target.value);
    onChange && onChange(e);
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    // checking isValidElement is the safe way and avoids a typescript error too
    if (React.isValidElement(child)) {
      return React.cloneElement<EditableWrapperChild>(
        child as ReactElement<EditableWrapperChild>,
        {
          onChange: changeAction,
          value,
          readOnly: !toggle, //TODO: fix it so it's just added to input
          disabled: !toggle, //TODO: fix it so it's just added to select
          //TODO: Or find a better approach!
        }
      );
    }
    return child;
  });
  return (
    <div className="editable-wrapper">
      <div className={`edit-box-wrapper ${toggle ? "focused" : ""}`}>
        {label && <label className="editable-label">{label}:</label>}
        {childrenWithProps}
        <div className={`confirmCancelWrapper ${toggle ? "show" : "hide"}`}>
          <button onClick={confirm} type="button" className="confirm-button" />
          <button onClick={cancel} type="button" className="cancel-button" />
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

export default EditableWrapper;
