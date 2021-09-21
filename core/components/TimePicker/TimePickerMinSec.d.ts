import React from 'react';
export interface Props {
    value?: any;
    sufix?: any;
    name?: string;
    label?: string;
    errorForm?: boolean;
    placeholder?: string;
    errorMessage?: string;
    maxWidth?: string | number;
    onChange?: (e: any) => void;
    variant?: 'outlined' | 'default';
    getValue?: (input: any) => string;
}
export declare const TimePickerMinSec: React.ForwardRefExoticComponent<Pick<{
    [x: string]: any;
    name: any;
    value: any;
    label: any;
    sufix: any;
    variant: any;
    maxWidth: any;
    getValue: any;
    errorForm: any;
    placeholder: any;
    errorMessage: any;
    onChange?: ((e: any) => void) | undefined;
}, import("styled-system").TLengthStyledSystem> & React.RefAttributes<unknown>>;
//# sourceMappingURL=TimePickerMinSec.d.ts.map