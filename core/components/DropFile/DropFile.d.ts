import React from 'react';
interface TypeTranslate {
    message: {
        row1: string;
        row2: string;
    };
    errorSize: string;
    errorType: string;
}
export interface Props {
    dataMaxSize?: number;
    onChange?: (e: any) => void;
    initImage?: string;
    name?: string;
    translate?: TypeTranslate;
    width?: number | string;
    maxWidth?: number | string;
    errorMessage?: string;
    errorForm?: boolean;
}
export declare const DropFile: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=DropFile.d.ts.map