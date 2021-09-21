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
    type?: 'minSec' | 'all';
    maxWidth?: string | number;
    onChange?: (e: any) => void;
    variant?: 'outlined' | 'default';
    getValue?: (input: any) => string;
}
export declare const TimePicker: React.FC<Props>;
//# sourceMappingURL=TimePicker.d.ts.map