import React from 'react';
import { ColorProps, SpaceProps, LayoutProps, FontSizeProps, FontWeightProps } from 'styled-system';
export interface Props extends ColorProps, SpaceProps, LayoutProps, FontSizeProps, FontWeightProps {
    variant?: 'internal' | 'external';
    href: string;
    children?: any;
    color?: string;
}
export interface StyledProps extends ColorProps, SpaceProps, LayoutProps, FontSizeProps, FontWeightProps {
    to?: string;
    href?: string;
    children?: any;
    color?: string;
}
export declare const Link: React.FC<Props>;
//# sourceMappingURL=Link.d.ts.map