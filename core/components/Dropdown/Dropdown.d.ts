import React from 'react';
import { SizeProps, MarginProps, LayoutProps } from 'styled-system';
declare type Item = {
    label: any;
    value: any;
};
export interface Props extends SizeProps, MarginProps, LayoutProps {
    label: string;
    itens: Item[];
    opened?: boolean;
    onChange?: (item: any) => void;
    disabled?: boolean;
    selected?: any;
}
export declare const Dropdown: React.FC<Props>;
export {};
//# sourceMappingURL=Dropdown.d.ts.map