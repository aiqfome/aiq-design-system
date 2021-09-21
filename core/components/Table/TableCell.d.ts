import React, { ReactNode } from 'react';
import { ColorProps, SpaceProps, LayoutProps, TypographyProps } from 'styled-system';
export interface Props {
    colspan?: number;
    children: ReactNode;
    wrap?: boolean | undefined | null;
}
export interface TableCellProps extends SpaceProps, ColorProps, LayoutProps, TypographyProps {
    children: ReactNode;
    wrap?: boolean | undefined | null | number;
}
export declare const TableCell: React.FC<Props>;
//# sourceMappingURL=TableCell.d.ts.map