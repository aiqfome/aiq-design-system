import React from 'react';
import { Moment } from 'moment';
export interface Props {
    variant?: 'single' | 'range';
    value?: Array<Moment>;
    name?: string;
    errorMessage?: string;
    errorForm?: boolean;
    placeholder?: string;
    onChange?: (startDate: any, endDate?: any) => void | undefined;
}
export declare const DatePicker: React.FC<Props>;
//# sourceMappingURL=DatePicker.d.ts.map