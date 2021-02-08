import React, { useEffect, useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  EditableLabel,
  EditableWrapper,
  EditButton,
} from '../design';
import { parseISO } from 'date-fns';
import DatePickerComponent from '../DatePickerComponent';
import { DatePickerProps } from "../@types";



const EditableDatePicker: React.FC<DatePickerProps> = (props) => {
  const {
    label,
    confirmAction,
    maxDate,
    defaultValue,
    placeholder,
    minDate,
    canEdit = true,
  } = props;

  const [editable, setEditable] = useState(false);

  const pickerRef = useRef<DatePicker>(null);

  const toggleEditMode = () => {
    setEditable((prevState) => !prevState);
  };

  const focusPicker = () => {
    // canEdit is defined by permissions of the logged-in admin user
    if (canEdit) {
      setEditable(true);
     // pickerRef.current!.input?.focus();
    }
  };

  useEffect(() => {
    if (editable) {
      focusPicker();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editable]);

  return (
    <EditableWrapper className="editable-datepicker">
      <EditableWrapper className={editable ? 'focused' : ''}>
        {label && <EditableLabel>{label}:</EditableLabel>}
        <DatePickerComponent
          placeholderText={placeholder}
          selected={
            defaultValue && (defaultValue as string).length > 0
              ? parseISO(defaultValue as string)
              : undefined
          }
          startDate={minDate}
          endDate={maxDate}
          onChange={confirmAction}
          pickerRef={pickerRef}
          disabled={!editable}
          onCalendarClose={() => setEditable(false)}
        />
        <EditButton
          onClick={toggleEditMode}
          className={'icon icon-edit'}
          type="button"
          // close action is being handled in `onCalendarClose`
          disabled={!canEdit || editable}
        />
      </EditableWrapper>
    </EditableWrapper>
  );
};

export default EditableDatePicker;
