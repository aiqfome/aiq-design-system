import React, { InputHTMLAttributes } from 'react';
export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    name?: string;
    inputRef?: any;
    label?: string;
    errorForm?: boolean;
    type?: string;
    errorMessage?: string;
    value?: string;
    sufix?: any;
    prefix?: any;
    variant?: 'outlined' | 'default' | 'tags';
    placeholder?: string;
    containerProps?: any;
    boxProps?: any;
    backgroundColor?: any;
    border?: any;
    width?: any;
    maxWidth?: any;
    mask?: string;
    nativeAutoComplete?: 'on' | 'disabled';
}
export declare const Input: React.FC<Props>;
//# sourceMappingURL=Input.d.ts.map