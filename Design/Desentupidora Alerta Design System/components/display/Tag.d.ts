import { ReactNode } from 'react';
export interface TagProps { selected?: boolean; onClick?: () => void; children?: ReactNode; }
export declare function Tag(props: TagProps): JSX.Element;
