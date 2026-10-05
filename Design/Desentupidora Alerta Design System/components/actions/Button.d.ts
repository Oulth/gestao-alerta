import { ReactNode, CSSProperties } from 'react';
/** Pill CTA button. "Falar com Especialista", WhatsApp. */
export interface ButtonProps {
  variant?: 'primary'|'whatsapp'|'lime'|'deep'|'outline'|'outline-inverse'|'ghost';
  size?: 'sm'|'md'|'lg'; icon?: ReactNode; iconRight?: ReactNode;
  /** square 4px corners + uppercase (default for outline, as in site top bar) */ square?: boolean;
  fullWidth?: boolean; disabled?: boolean; type?: 'button'|'submit';
  onClick?: () => void; children?: ReactNode; style?: CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
