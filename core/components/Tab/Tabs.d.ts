import React from 'react';
import { SpaceProps, LayoutProps } from 'styled-system';
import { DefaultTheme } from 'styled-components';
export interface TabsProps extends SpaceProps, LayoutProps, DefaultTheme {
    extra?: any;
    children?: any;
    wrapperProps?: any;
    isMobile?: boolean;
    variant?: 'default' | 'contained' | 'card';
    scrollPosition?: 'left' | 'middle' | 'right';
    onChange?: (event: any, newValue: any) => void;
}
export declare const Tabs: React.FC<TabsProps>;
//# sourceMappingURL=Tabs.d.ts.map