import { ReactNode } from 'react';
export interface DialogProps { open?: boolean; title?: string; onClose?: () => void; actions?: ReactNode; children?: ReactNode; }
export declare function Dialog(props: DialogProps): JSX.Element | null;
