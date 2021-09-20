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
    variant?: 'outlined' | 'default';
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
export declare const InputMoney: React.FC<Props>;
//# sourceMappingURL=InputMoney.d.ts.map