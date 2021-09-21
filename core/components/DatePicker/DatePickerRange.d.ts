import React from 'react';
import { Moment } from 'moment';
export interface Props {
    value?: Array<Moment>;
    name?: string;
    errorMessage?: string;
    errorForm?: boolean;
    placeholder?: string;
    onChange?: (startDate: any, endDate: any) => void;
}
export declare const DatePickerRange: React.FC<Props>;
//# sourceMappingURL=DatePickerRange.d.ts.map