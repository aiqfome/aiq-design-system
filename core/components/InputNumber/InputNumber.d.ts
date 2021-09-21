import React, { InputHTMLAttributes } from 'react';
export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    name?: string;
    inputRef?: any;
    label?: string;
    errorForm?: boolean;
    type?: string;
    errorMessage?: string;
    value?: string | number;
    prefix?: any;
    sufix?: any;
    variant?: 'outlined' | 'default';
    placeholder?: string;
    disabled?: boolean;
    containerProps?: any;
    boxProps?: any;
    backgroundColor?: any;
    border?: any;
    width?: any;
    maxWidth?: any;
    marginLeft?: any;
    marginRight?: any;
    nativeAutoComplete?: 'on' | 'disabled';
    onChange?: any;
}
export declare const NeutralInputStyled: import("styled-components").StyledComponent<any, any, object & Props, string | number | symbol>;
export interface PropsNeutralContainerSufix {
    inputSelected?: boolean;
    errorForm?: boolean;
    onClick?: () => void;
    onBlur?: () => void;
}
export declare const InputNumber: React.FC<Props>;
//# sourceMappingURL=InputNumber.d.ts.map