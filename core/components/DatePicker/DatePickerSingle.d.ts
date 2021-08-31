import React from 'react';
import { Moment } from 'moment';
export interface Props {
    variant?: 'single' | 'range';
    value?: Array<Moment>;
    onChange?: (date: any) => void;
    name?: string;
    errorMessage?: string;
    errorForm?: boolean;
    placeholder?: string;
}
export declare const DatePickerSingle: React.FC<Props>;
//# sourceMappingURL=DatePickerSingle.d.ts.map