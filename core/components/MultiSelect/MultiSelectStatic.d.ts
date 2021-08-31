import React from 'react';
declare type Item = {
    id: any;
    name: string;
    select?: string;
};
export interface Props {
    maxWidth?: number | string;
    filters?: {
        name: string;
        allItems?: boolean;
        clear?: boolean;
        items?: number[];
    }[];
    onChange?: any;
    value?: Item[];
    items: Item[];
    isLoading?: boolean;
    isFetchable?: boolean;
    placeholder?: string;
    errorMessage?: string;
    errorForm?: boolean;
    isDependent?: boolean;
    emptyMessage?: string;
    dependentMessage?: string;
}
export declare const MultiSelectStatic: React.FC<Props>;
export {};
//# sourceMappingURL=MultiSelectStatic.d.ts.map