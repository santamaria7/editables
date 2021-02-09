import React, { InputHTMLAttributes, ReactText, SelectHTMLAttributes } from "react";


export type EditableInputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    formRef?:
        | ((instance: HTMLInputElement) => void)
        | React.RefObject<HTMLInputElement>;
    confirmAction?: Function;
    cancelAction?: Function;
    disabled?: boolean;
    canEdit?: boolean;
};
export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    ref?:
        | ((instance: HTMLInputElement) => void)
        | React.RefObject<HTMLInputElement>;
}

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
