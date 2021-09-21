import React, { ReactNode } from 'react';
import { DefaultTheme } from 'styled-components';
import { SpaceProps, BorderProps, LayoutProps, FontSizeProps, FontWeightProps } from 'styled-system';
export interface Props extends DefaultTheme, SpaceProps, LayoutProps, BorderProps, FontSizeProps, FontWeightProps {
    children?: ReactNode;
    prefix?: any;
    sufix?: any;
    refButton?: any;
    variantType?: string;
    variant?: 'text' | 'contained' | 'outlined' | 'fab' | 'icon';
    palette?: 'primary' | 'error' | 'secondary' | 'neutral';
    onClick?: any;
    fullWidth?: boolean;
    disabled?: boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
}
export declare const ButtonStyled: import("styled-components").StyledComponent<"button", any, Props, never>;
export declare const Button: React.FC<Props>;
//# sourceMappingURL=Button.d.ts.map