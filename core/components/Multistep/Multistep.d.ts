import React from 'react';
export interface Props {
    steps: {
        name: string;
        component: any;
        icon?: any;
    }[];
    stepCurrent?: number;
    disabledClickStep?: boolean;
    onClickStep?: (key: any) => void;
}
export interface ButtonProps {
    disabled?: boolean;
}
export declare const Multistep: React.FC<Props>;
//# sourceMappingURL=Multistep.d.ts.map