import React from 'react';
export interface Props {
    value?: any;
    sufix?: any;
    name?: string;
    label?: string;
    errorForm?: boolean;
    hasSeconds?: boolean;
    placeholder?: string;
    errorMessage?: string;
    maxWidth?: string | number;
    onChange?: (e: any) => void;
    variant?: 'outlined' | 'default';
}
export declare const TimePickerAll: React.ForwardRefExoticComponent<Pick<{
    [x: string]: any;
    name: any;
    value: any;
    label: any;
    sufix: any;
    variant: any;
    maxWidth: any;
    errorForm: any;
    hasSeconds: any;
    placeholder: any;
    errorMessage: any;
    onChange?: ((e: any) => void) | undefined;
}, import("styled-system").TLengthStyledSystem> & React.RefAttributes<unknown>>;
//# sourceMappingURL=TimePickerAll.d.ts.map