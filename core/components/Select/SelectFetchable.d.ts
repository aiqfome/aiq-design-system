import React from 'react';
import { Props as BoxPros } from '../Box';
export interface Props extends BoxPros {
    label?: string;
    items?: Array<string | {
        id: any;
        name: any;
    }>;
    isOpen?: boolean;
    variant?: 'outlined';
    prefix?: any;
    placeholder?: string;
    handleSelectedItemChange?: (item: any) => void;
    onChangeTextInput?: (text: string) => void;
    selectedItem?: any;
    autoComplete?: boolean;
    sufix?: any;
    isLoading?: boolean;
    errorMessage?: string;
    errorForm?: boolean;
    onChange?: any;
    loadingMessage?: string;
    emptyMessage?: string;
    inputProps?: any;
    isDependent?: boolean;
    dependentMessage?: string;
}
export declare const SelectFetchable: React.FC<Props>;
//# sourceMappingURL=SelectFetchable.d.ts.map