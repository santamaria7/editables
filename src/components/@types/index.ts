import React, { InputHTMLAttributes, ReactText, SelectHTMLAttributes } from "react";

export type InputProps =  InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    formRef?:
        | ((instance: HTMLInputElement) => void)
        | React.RefObject<HTMLInputElement>;
    inline?: boolean;
};
export type EditableInputProps = InputProps & {
    confirmAction?: Function;
    cancelAction?: Function;
    disabled?: boolean;
    canEdit?: boolean;
};

type OptionType =  {
    value: string | number | ReactText;
    text?: string;
    label?: string;
    disabled?: boolean;
}

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
    formRef?:
        | ((instance: HTMLSelectElement) => void)
        | React.RefObject<HTMLSelectElement>;
    options: OptionType[];
    defaultValue?: string;
    label?: string;
};

export type EditableSelectProps = SelectProps & {
    confirmAction?: Function;
    cancelAction?: Function;
};

export type DatePickerProps = {
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