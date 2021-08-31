import React from 'react';
import { Props as BoxPros } from '../Box';
export interface Props extends BoxPros {
    label?: string;
    items?: Array<string | {
        id: any;
        name: any;
        select?: any;
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
    inputProps?: any;
    clearOnSelect?: boolean;
    loadingMessage?: string;
    emptyMessage?: string;
    isDependent?: boolean;
    dependentMessage?: string;
}
export declare const SelectStatic: React.FC<Props>;
//# sourceMappingURL=SelectStatic.d.ts.map