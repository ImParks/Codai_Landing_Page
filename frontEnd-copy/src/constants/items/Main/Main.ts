import { MainFooterBottom } from '@/components/molecules/Main/MainFooter/MainFooterBottom/MainFooterBottom';
import { MAIN_SOLUTIONS_ORGANISMS } from './Solutions/SolutionsItem';

import {
    MainHeaderOrganismsProps,
    MainFooterOrganismsProps,
    MainItemsProps,
} from './Main.types';
import { MAIN_PRICING_ORGANISMS } from './Pricing/Pricing';
import { MAIN_USER_GUIDE_ORGANISMS } from './UserGuide/UserGuide';

export const MAIN_HEADER_ORGANISMS: MainHeaderOrganismsProps = {
    "logo" : "MAIN_HEADER_LOGO",
    "items" : {
        "solution" : {
            "textKey" : "mainHeader.headerOrganisms.solution",
            "baseRouteKey" : "MAIN",
            "pageRouteKey" : "SOLUTIONS"
        },
        "pricePolicy" : {
            "textKey" : "mainHeader.headerOrganisms.pricePolicy",
            "baseRouteKey" : "MAIN",
            "pageRouteKey" : "PRICING"
        },
        "userGuide" : {
            "textKey" : "mainHeader.headerOrganisms.userGuide",
            "baseRouteKey" : "MAIN",
            "pageRouteKey" : "USER_GUIDE"
        }
    },
    "login" : {
        "textKey" : "mainHeader.headerOrganisms.login",
        "baseRouteKey" : "MAIN",
        "pageRouteKey" : "LOGIN"
    }
}

export const MAIN_FOOTER_ORGANISMS: MainFooterOrganismsProps = {
    "logo" : "MAIN_FOOTER_LOGO",
    "aboutUs" : {
        "address"    : {
            "titleKey" : "mainFooter.footerOrganisms.aboutUs.0.title",
            "descriptionKey" : "mainFooter.footerOrganisms.aboutUs.0.description",
        },
        "mail" : {
            "titleKey" : "mainFooter.footerOrganisms.aboutUs.1.title",
            "descriptionKey" : "mainFooter.footerOrganisms.aboutUs.1.description",
        },
        "phone" : {
            "titleKey" : "mainFooter.footerOrganisms.aboutUs.2.title",
            "descriptionKey" : "mainFooter.footerOrganisms.aboutUs.2.description",
        },
        "businessRegistrationNumber" : {
            "titleKey" : "mainFooter.footerOrganisms.aboutUs.3.title",
            "descriptionKey" : "mainFooter.footerOrganisms.aboutUs.3.description",
        },
        "mailOrderBusinessRegistrationNumber" : {
            "titleKey" : "mainFooter.footerOrganisms.aboutUs.4.title",
            "descriptionKey" : "mainFooter.footerOrganisms.aboutUs.4.description",
        }
    },
    "policy" : {
        "termsOfUse" : {
            "textKey" : "mainFooter.footerOrganisms.termsOfUse.title",
            "baseRouteKey" : "MAIN",
            "pageRouteKey" : "SOLUTIONS"
        },
        "privacyPolicy" : {
            "textKey" : "mainFooter.footerOrganisms.privacyPolicy.title",
            "baseRouteKey" : "MAIN",
            "pageRouteKey" : "SOLUTIONS"
        },
        "refundPolicy" : {
            "textKey" : "mainFooter.footerOrganisms.refundPolicy.title",
            "baseRouteKey" : "MAIN",
            "pageRouteKey" : "SOLUTIONS"
        }
    },
    "social" : {
        "homePage" : {
            "id" : "homePage",
            "iconKey" : "MAIN_FOOTER_HOME_PAGE",
            "textKey" : "mainFooter.footerOrganisms.social.homePage.title",
        },
        "blog" : {
            "id" : "blog",
            "iconKey" : "MAIN_FOOTER_BLOG",
            "textKey" : "mainFooter.footerOrganisms.social.blog.title",
        },
        "youtube" : {
            "id" : "youtube",
            "iconKey" : "MAIN_FOOTER_YOUTUBE",
            "textKey" : "mainFooter.footerOrganisms.social.youtube.title",
        }
            
    }
}



export const MAIN_ITEMS: MainItemsProps = {
    headerOrganisms: MAIN_HEADER_ORGANISMS,
    solutionsOrganisms: MAIN_SOLUTIONS_ORGANISMS,
    pricingOrganisms: MAIN_PRICING_ORGANISMS,
    userGuideOrganisms: MAIN_USER_GUIDE_ORGANISMS,
    footerOrganisms: MAIN_FOOTER_ORGANISMS
}
