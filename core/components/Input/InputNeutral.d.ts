import React, { InputHTMLAttributes } from 'react';
export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    name?: string;
    inputRef?: any;
    errorForm?: boolean;
    type?: string;
    errorMessage?: string;
    value?: string;
    sufix?: any;
    prefix?: any;
    placeholder?: string;
    containerProps?: any;
    boxProps?: any;
    backgroundColor?: any;
    border?: any;
    width?: any;
    maxWidth?: any;
    nativeAutoComplete?: 'on' | 'disabled';
}
export interface PropsContainerSufix {
    inputSelected?: boolean;
    errorForm?: boolean;
    onClick?: () => void;
    onBlur?: () => void;
}
export declare const InputNeutral: React.FC<Props>;
//# sourceMappingURL=InputNeutral.d.ts.map