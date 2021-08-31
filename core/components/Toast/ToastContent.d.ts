import React from 'react';
import { Message } from './Toast';
export interface Props {
    type?: 'info' | 'success' | 'error' | 'warning';
    className?: any;
    message: Message;
}
export declare const ToastContent: React.FC<Props>;
//# sourceMappingURL=ToastContent.d.ts.map