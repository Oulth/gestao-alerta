export interface NavBarProps { items?: string[]; active?: string; onSelect?: (item: string) => void; name?: string; logoBase?: string; }
export declare function NavBar(props: NavBarProps): JSX.Element;
