import React from 'react';
export interface Props {
    title: string;
    show?: boolean;
    animation?: boolean;
    zIndex?: number;
    onClose?: () => void;
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
export declare const Alert: React.FC<Props>;
//# sourceMappingURL=Alert.d.ts.map