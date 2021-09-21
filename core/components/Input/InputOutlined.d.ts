import React, { InputHTMLAttributes } from 'react';
import { SpaceProps } from 'styled-system';
export interface Props extends InputHTMLAttributes<HTMLInputElement>, SpaceProps {
    name?: string;
    placeholder?: string;
    inputRef?: any;
    label?: string;
    errorForm?: boolean;
    type?: string;
    errorMessage?: string;
    value?: string;
    sufix?: any;
    containerProps?: any;
    disabled?: boolean;
    maxWidth?: number | string;
    backgroundColor?: number | string;
    nativeAutoComplete?: 'on' | 'disabled';
}
export declare const InputOutlined: React.FC<Props>;
//# sourceMappingURL=InputOutlined.d.ts.map