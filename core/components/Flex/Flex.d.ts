import React from 'react';
import { DefaultTheme } from 'styled-components';
import { ColorProps, SpaceProps, LayoutProps, FontSizeProps, FontWeightProps, BorderProps, FlexProps, PositionProps, FlexboxProps, TextAlignProps } from 'styled-system';
export interface Props extends SpaceProps, DefaultTheme, LayoutProps, FontSizeProps, FontWeightProps, PositionProps, ColorProps, FlexProps, FlexboxProps, BorderProps, TextAlignProps {
    variant?: 'auto' | 'centralized' | 'fullCentralized';
    isClickable?: boolean;
    color?: string;
    fullHeight?: boolean;
    children?: any;
    className?: string;
    onClick?: (e: any) => void;
    onDragOver?: (e: any) => void;
    onDragEnter?: (e: any) => void;
    onDragLeave?: (e: any) => void;
    onDragEnd?: (e: any) => void;
    onDrop?: (e: any) => void;
    style?: any;
}
export declare const Flex: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Flex.d.ts.map