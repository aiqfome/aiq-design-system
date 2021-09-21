import React from 'react';
import { ColorProps, PositionProps, SpaceProps, LayoutProps, FontSizeProps, FontWeightProps, BorderProps, BoxShadowProps, FlexboxProps } from 'styled-system';
export interface Props extends ColorProps, SpaceProps, FlexboxProps, LayoutProps, FontSizeProps, FontWeightProps, PositionProps, BorderProps, BoxShadowProps {
    color?: string;
    children?: any;
    refBox?: any;
    onClick?: any;
    className?: string;
}
export declare const BoxStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Box: React.FC<Props>;
//# sourceMappingURL=Box.d.ts.map