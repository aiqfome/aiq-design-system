import React, { ReactNode } from 'react';
declare type ContentFunc = () => React.ReactElement | string;
export interface Props {
    arrow?: boolean;
    keepOpen?: boolean;
    isVisible?: boolean;
    children?: ReactNode;
    trigger?: 'click' | 'hover' | 'contextMenu';
    content?: string | React.ReactElement | ContentFunc;
    notificationBackgroundColor?: string;
    notificationTextColor?: string;
    onVisibleChange?: (visible: boolean) => void;
    theme?: any;
    placement?: 'topLeft' | 'topRight' | 'topCenter' | 'bottomLeft' | 'bottomRight' | 'bottomCenter';
}
export declare const Popover: React.FC<Props>;
export {};
//# sourceMappingURL=Popover.d.ts.map