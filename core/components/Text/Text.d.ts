import { ColorProps, SpaceProps, LayoutProps, FontSizeProps, FontWeightProps, TypographyProps } from 'styled-system';
export interface Props extends ColorProps, SpaceProps, LayoutProps, FontSizeProps, FontWeightProps, TypographyProps {
    cursor?: string;
    truncate?: boolean;
    whiteSpace?: 'nowrap' | 'normal' | 'pre';
}
export declare const Text: import("styled-components").StyledComponent<"span", any, Props, never>;
//# sourceMappingURL=Text.d.ts.map