import React from 'react';
export interface Props {
    title: string;
    form?: any;
    formProps?: any;
    buttonsProps?: any;
    variant?: 'big' | 'medium' | 'small';
    show?: boolean;
    animation?: boolean;
    zIndex?: number;
    onClose?: () => void;
    onSubmit?: () => void;
    children?: any;
    okButton?: {
        label: string;
        function: () => void;
        visible: boolean;
    };
    cancelButton?: {
        label: string;
        function: () => void;
        visible: boolean;
    };
}
export declare const Modal: React.FC<Props>;
//# sourceMappingURL=Modal.d.ts.map