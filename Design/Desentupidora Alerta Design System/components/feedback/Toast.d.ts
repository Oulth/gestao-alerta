import { ReactNode } from 'react';
export interface ToastProps { tone?: 'success'|'danger'|'info'|'warning'; icon?: ReactNode; children?: ReactNode; }
export declare function Toast(props: ToastProps): JSX.Element;
