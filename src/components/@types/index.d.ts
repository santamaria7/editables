import React, { InputHTMLAttributes, ReactText, SelectHTMLAttributes } from "react";

type InputProps =  InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    formRef?:
        | ((instance: HTMLInputElement) => void)
        | React.RefObject<HTMLInputElement>;
    inline?: boolean;
    wrapperClassName?: string;
};
type EditableInputProps = InputProps & {
    confirmAction?: Function;
    cancelAction?: Function;
    disabled?: boolean;
    canEdit?: boolean;
};

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
    formRef?:
        | ((instance: HTMLSelectElement) => void)
        | React.RefObject<HTMLSelectElement>;
    options: {
        value: string | number | ReactText;
        text?: string;
        label?: string;
        disabled?: boolean;
    }[];
    defaultValue?: string;
    label?: string;
};

type EditableSelectProps = SelectProps & {
    confirmAction?: Function;
    cancelAction?: Function;
};

type DatePickerProps = {
    label?: string;
    confirmAction?: Function;
    cancelAction?: Function;
    disabled?: boolean;
    maxDate?: number;
    name?: string;
    defaultValue?: string;
    placeholder: string;
    minDate?: number;
    canEdit?: boolean;
};