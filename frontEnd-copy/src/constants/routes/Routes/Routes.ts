import {RouteGroup} from "./Routes.types";



export const MAIN : RouteGroup = {
    baseRoute : "",
    pages : {
        MAIN : {
            titleKey : "mainPage.title",
            sideRoute : "",
        },
        SOLUTIONS : {
            titleKey : "solutionsPage.title",
            sideRoute : "solutions",
        },
        PRICING : {
            titleKey : "pricingPage.title",
            sideRoute : "pricing",
        },
        USER_GUIDE : {
            titleKey : "userGuidePage.title",
            sideRoute : "userGuide",
        }
    }
}
