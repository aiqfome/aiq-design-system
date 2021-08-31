import React from 'react';
import { Props as BoxProps } from '../Box';
export interface Props extends BoxProps {
    src?: string;
    palette?: string;
    alt?: string;
    size?: string;
    fallback?: string;
    variant?: 'box' | 'rounded';
}
export declare const AvatarStyled: import("styled-components").StyledComponent<"img", any, {}, never>;
export declare const Avatar: React.FC<Props>;
//# sourceMappingURL=Avatar.d.ts.map