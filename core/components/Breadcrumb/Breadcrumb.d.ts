import React from 'react';
export interface Props {
    routes: {
        icon?: any;
        name?: any;
        path?: string;
        type?: 'internal' | 'external';
        overlay?: any;
    }[];
}
export interface PropsItem {
    children?: any;
    overlay?: any;
    className?: string;
}
export declare const Breadcrumb: React.FC<Props>;
//# sourceMappingURL=Breadcrumb.d.ts.map