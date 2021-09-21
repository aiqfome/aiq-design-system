import React from 'react';
import { SpaceProps } from 'styled-system';
export interface TabProps extends SpaceProps {
    index: number;
    children: any;
    value?: number;
    active?: boolean;
    variant?: 'default' | 'contained' | 'card';
}
export declare const Tab: React.FC<TabProps>;
//# sourceMappingURL=Tab.d.ts.map