import React from 'react';
export interface Props {
    name?: string;
    errorForm?: boolean;
    type?: string;
    errorMessage?: string;
    value?: string;
    placeholder?: string;
    onChange?: (value: any) => void;
    backgroundColor?: any;
    border?: any;
    width?: any;
    maxWidth?: any;
    nativeAutoComplete?: 'on' | 'disabled';
}
export interface PropsContainerInput {
    inputSelected?: boolean;
    errorForm?: boolean;
    onClick?: () => void;
    onBlur?: () => void;
}
export declare const InputTags: React.FC<Props>;
//# sourceMappingURL=InputTags.d.ts.map