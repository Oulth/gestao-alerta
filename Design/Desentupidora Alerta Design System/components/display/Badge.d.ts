import { ReactNode } from 'react';
export interface BadgeProps { tone?: 'lime'|'teal'|'deep'|'light'|'white'|'outline-inverse'|'success'|'warning'|'success-soft'|'warning-soft'; icon?: ReactNode; children?: ReactNode; }
export declare function Badge(props: BadgeProps): JSX.Element;
