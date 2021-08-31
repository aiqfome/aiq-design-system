import React from 'react';
export interface Props {
    count?: number;
    color?: string;
    disabled?: boolean;
    variant?: 'default' | 'noCount';
    size?: 'default' | 'small' | 'large';
    defaultPage?: number;
    page?: number;
    nextPage?: any;
    prevPage?: any;
    onChange?: (page: number) => void;
}
export declare const Pagination: React.FC<Props>;
//# sourceMappingURL=Pagination.d.ts.map