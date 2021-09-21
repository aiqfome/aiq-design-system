import React from 'react';
export declare type Message = {
    id: string;
    type: string;
    title: string;
    description: string;
    fixed?: boolean;
};
export interface Props {
    messages?: Message[];
}
export declare const Toast: React.FC<Props>;
//# sourceMappingURL=Toast.d.ts.map