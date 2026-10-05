import { ReactNode, ChangeEvent } from 'react';
export interface InputProps { label?: string; hint?: string; error?: string; icon?: ReactNode; value?: string; onChange?: (e: ChangeEvent<HTMLInputElement>) => void; placeholder?: string; type?: string; }
export declare function Input(props: InputProps): JSX.Element;
