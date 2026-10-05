import { ChangeEvent } from 'react';
export interface SelectProps { label?: string; options?: string[]; value?: string; placeholder?: string; onChange?: (e: ChangeEvent<HTMLSelectElement>) => void; }
export declare function Select(props: SelectProps): JSX.Element;
