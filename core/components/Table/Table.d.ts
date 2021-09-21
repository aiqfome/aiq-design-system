import React from 'react';
import { SpaceProps, LayoutProps } from 'styled-system';
export interface TableProps {
    scroll?: string;
    data: Array<any>;
    onHoverRow?: any;
    columns: Array<any>;
    hoverable?: boolean;
    renderExpanded?: boolean;
    onClickRow?: (record: any) => any;
    expandedRowRender?: (record: any) => any;
    onRowBackground?: (record: any) => string;
}
export interface FlexProps extends SpaceProps, LayoutProps {
    showScroll: boolean;
}
export declare const Table: React.FC<TableProps>;
//# sourceMappingURL=Table.d.ts.map