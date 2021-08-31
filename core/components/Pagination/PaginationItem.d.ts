import React from 'react';
import { DefaultTheme } from 'styled-components';
interface Props extends DefaultTheme {
    active?: boolean;
    children?: any;
    cursor?: string;
    className?: string;
    disabled?: boolean;
    size?: 'default' | 'small' | 'large';
    onClick?: () => void;
}
export declare const PaginationItem: React.FC<Props>;
export {};
//# sourceMappingURL=PaginationItem.d.ts.map