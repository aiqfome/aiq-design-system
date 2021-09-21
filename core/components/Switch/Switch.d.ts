import React, { InputHTMLAttributes } from 'react';
import { DefaultTheme } from 'styled-components';
export interface Props extends DefaultTheme, InputHTMLAttributes<HTMLInputElement> {
    checked?: boolean;
    disabled?: boolean;
    className?: string;
    variant?: 'default' | 'small';
}
export declare const Switch: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=Switch.d.ts.map