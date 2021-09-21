import React from 'react';
declare type Item = {
    id: any;
    name: string;
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
    loadingMessage?: string;
    emptyMessage?: string;
    errorMessage?: string;
    errorForm?: boolean;
    isDependent?: boolean;
    dependentMessage?: string;
}
export declare const MultiSelect: React.FC<Props>;
export {};
//# sourceMappingURL=MultiSelect.d.ts.map