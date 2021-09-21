import React, { ReactNode } from 'react';
import { DefaultTheme } from 'styled-components';
import { ColorProps, BorderProps, SpaceProps, LayoutProps, FontSizeProps, FontWeightProps } from 'styled-system';
export interface Props extends ColorProps, DefaultTheme, SpaceProps, BorderProps, LayoutProps, FontSizeProps, FontWeightProps {
    color?: string;
    count?: number;
    children?: ReactNode;
    className?: string;
    statusColor?: string;
    overflowCount?: number;
    variant?: 'label' | 'default';
}
export declare const Badge: React.FC<Props>;
//# sourceMappingURL=Badge.d.ts.map