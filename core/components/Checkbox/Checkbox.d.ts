import React, { InputHTMLAttributes } from 'react';
import { DefaultTheme } from 'styled-components';
export interface Props extends DefaultTheme, InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    labelColor?: string;
    style?: any;
}
export declare const Checkbox: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=Checkbox.d.ts.map