import React from 'react';
export interface Props {
    resetCSS?: boolean;
    children?: any;
    defaultTheme?: any;
}
interface ContextProps {
    theme: any;
    setTheme: any;
}
export declare const ThemeProvider: React.FC<Props>;
export declare const useTheme: () => ContextProps;
export {};
//# sourceMappingURL=index.d.ts.map