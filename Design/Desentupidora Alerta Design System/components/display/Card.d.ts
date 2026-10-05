import { ReactNode, CSSProperties } from 'react';
/** Service / info card, 22px radius. */
export interface CardProps { title?: string; eyebrow?: string; icon?: ReactNode; tone?: 'light'|'dark'|'teal'; footer?: ReactNode; children?: ReactNode; style?: CSSProperties; }
export declare function Card(props: CardProps): JSX.Element;
