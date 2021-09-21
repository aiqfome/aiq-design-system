import React, { ReactNode } from 'react';
import { DefaultTheme } from 'styled-components';
import { LayoutProps, MarginProps, ShadowProps, PaddingProps } from 'styled-system';
export interface Props extends DefaultTheme, LayoutProps, ShadowProps, MarginProps, PaddingProps {
    opened: boolean;
    loading?: boolean;
    children?: ReactNode;
    onClose?: () => void;
    variation?: 'right' | 'left';
}
export declare const DrawerStyled: import("styled-components").StyledComponent<"div", any, Props, never>;
export declare const Drawer: React.FC<Props>;
//# sourceMappingURL=Drawer.d.ts.map