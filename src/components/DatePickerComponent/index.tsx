import React from 'react';
import DatePicker from 'react-datepicker';
import { DatePickerWrapper } from "../design";


//TODO: fix types
const DatePickerComponent = (props: any) => {
  const { pickerRef, ...rest } = props;
  return (
    <DatePickerWrapper>
      <DatePicker
        {...rest}
        ref={pickerRef}
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
      />
    </DatePickerWrapper>
  );
};

export default DatePickerComponent;
