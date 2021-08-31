import React, { ReactNode } from 'react';
interface TabProps {
    content: any;
    index: number;
    value?: number;
    active?: boolean;
    variant?: 'default' | 'contained' | 'card';
}
export interface Props {
    tabs?: Array<TabProps>;
    title?: string;
    tabIndex?: number;
    header?: ReactNode;
    children?: ReactNode;
    containerProps?: any;
    tabsExtra?: ReactNode;
    onChangeTab?: (event: any, newValue: any) => void;
}
export declare const Container: React.FC<Props>;
export {};
//# sourceMappingURL=Container.d.ts.map