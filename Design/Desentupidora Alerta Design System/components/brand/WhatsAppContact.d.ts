/** Outlined WhatsApp number block — the recurring sign-off on Instagram posts. Set CSS var --label-bg to the surface colour so the floating label masks the border. */
export interface WhatsAppContactProps { number?: string; ddd?: string; label?: string; tone?: 'dark'|'light'; scale?: number; }
export declare function WhatsAppContact(props: WhatsAppContactProps): JSX.Element;
