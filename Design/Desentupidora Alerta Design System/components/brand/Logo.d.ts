/** Official logo (PNG cut-outs in assets/). variant dark = for dark/teal grounds (white text, lime rings); light = teal text for white grounds. */
export interface LogoProps { variant?: 'dark'|'light'|'white'|'symbol'|'symbol-white'; height?: number; /** folder URL ending in "/" holding the logo PNGs; falls back to window.ALERTA_ASSET_BASE then "assets/" */ base?: string; alt?: string; }
export declare function Logo(props: LogoProps): JSX.Element;
