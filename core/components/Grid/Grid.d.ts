import React from 'react';
import { SpaceProps, GridProps, LayoutProps, FontSizeProps, FontWeightProps } from 'styled-system';
export interface Props extends SpaceProps, LayoutProps, FontSizeProps, GridProps, FontWeightProps {
    color?: string;
}
export declare const GridStyled: import("styled-components").StyledComponent<"div", any, Props, never>;
export declare const Grid: React.FC<Props>;
//# sourceMappingURL=Grid.d.ts.map