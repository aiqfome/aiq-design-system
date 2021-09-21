import React, { ReactNode } from 'react';
export interface Props {
    children?: ReactNode;
    body?: any;
    variant?: 'topLeft' | 'topRight' | 'topCenter' | 'bottomLeft' | 'bottomRight' | 'bottomCenter';
    type?: 'default' | 'balloon';
    onMouseOver?: () => void;
}
export declare const Tooltip: React.FC<Props>;
//# sourceMappingURL=Tooltip.d.ts.map