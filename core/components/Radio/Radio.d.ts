import React, { InputHTMLAttributes } from 'react';
import { MarginProps } from 'styled-system';
export interface Props extends MarginProps, InputHTMLAttributes<HTMLInputElement> {
    name: string;
    value: any;
    variant?: 'default' | 'small';
    disabled?: boolean;
    label?: string;
    defaultChecked?: boolean;
    onChange?: (event: any) => void;
}
export declare const Radio: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=Radio.d.ts.map