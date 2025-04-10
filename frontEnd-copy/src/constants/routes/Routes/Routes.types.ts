export interface RoutePageInfo {
    titleKey: string;
    sideRoute: string;
}

export interface RouteGroup {
    baseRoute: string;
    pages: {
        [page: string]: RoutePageInfo;
    }
}

export interface Route {
    [group: string]: RouteGroup;
}

