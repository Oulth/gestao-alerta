import { ReactNode } from 'react';
export interface IconButtonProps { icon: ReactNode; label: string; variant?: 'primary'|'whatsapp'|'lime'|'deep'|'ghost'; size?: number; onClick?: () => void; disabled?: boolean; }
export declare function IconButton(props: IconButtonProps): JSX.Element;
