import * as ROUTES from "@/constants/routes/Routes/Routes";
import {  RouteGroup,RoutePageInfo } from "@/constants/routes/Routes/Routes.types";




const getRouteGroup = (group: string): RouteGroup => {
    return ROUTES[group as keyof typeof ROUTES];
}

const getRoutePage = (route: RouteGroup, page: string): RoutePageInfo => {
    
    return route.pages[page as keyof typeof route.pages];
}


export const getRoutePath = (group: string, page: string): string => {
    let route = getRouteGroup(group);
    let pageInfo = getRoutePage(route, page);
    
    if (!route || !pageInfo) {
        return '/'; // 기본 경로로 리다이렉트
    }

    const sideRoute = pageInfo.sideRoute ? `/${pageInfo.sideRoute}` : '';

    return `${route.baseRoute}${sideRoute}`;
};



export const getSideRoute = (group: string, page: string): string => {
    const route = getRouteGroup(group);
    const pageInfo = getRoutePage(route, page);

    if (!route || !pageInfo) {
        return '/';
    }
    return pageInfo.sideRoute;
}

export const getBaseRoute = (group: string): string => {    
    const route = getRouteGroup(group);
    
    if (!route) {
        return '/';
    }
    return route.baseRoute;
}

export const getRouteNameKey = (group: string, page: string): string => {
    const route = getRouteGroup(group);
    const pageInfo = getRoutePage(route, page);

    if (!route || !pageInfo) {
        return '';
    }
    return pageInfo.titleKey;
}

