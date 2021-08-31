import React, { ReactNode } from 'react';
interface Item {
    visible?: boolean;
    disabled?: boolean;
    icon?: React.ReactElement;
    action?: (event: any) => void;
    description?: React.ReactElement | string;
    disabledMessage?: string;
}
export interface Props {
    items?: Item[];
    arrow?: boolean;
    keepOpen?: boolean;
    children?: ReactNode;
    title?: React.ReactElement | string;
    header?: React.ReactElement | string;
    trigger?: 'click' | 'hover' | 'contextMenu';
    placement?: 'topLeft' | 'topRight' | 'topCenter' | 'bottomLeft' | 'bottomRight' | 'bottomCenter';
}
export declare const Actions: React.FC<Props>;
export {};
//# sourceMappingURL=Actions.d.ts.map