import React from 'react';
export interface Props {
    children?: any;
}
interface ContextProps {
    addToast: any;
    removeToast: any;
}
export declare const ToastProvider: React.FC<Props>;
export declare const useToast: () => ContextProps;
export {};
//# sourceMappingURL=ToastProvider.d.ts.map