export interface NavLinkSpanProps {
    variant: "default" | "find" | "item";
    baseRouteKey: string;
    pageRouteKey: string;
    text: string;
    style?: "mainHeaderItem" | "buttonItem" | "darkTheme" | "active" | "free" | "regular" | "special";
    fontSize?: string;
}
