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
    handleSelectedItemChange?: (item: any) => void;
    onChange?: any;
    value?: Item[];
    items: Item[];
    isLoading?: boolean;
    placeholder?: string;
    loadingMessage?: string;
    emptyMessage?: string;
    errorMessage?: string;
    errorForm?: boolean;
    isDependent?: boolean;
    dependentMessage?: string;
}
export declare const MultiSelectFetchable: React.FC<Props>;
export {};
//# sourceMappingURL=MultiSelectFetchable.d.ts.map