import { PricingOrganismsProps  } from "./Pricing.types";

export const MAIN_PRICING_ORGANISMS: PricingOrganismsProps = {
    "pricingHeader" : {
        "titleItem" : {
            "textKey" : "pricingPage.pricingHeader.title"
        },
        "descriptionItem" : {
            "textKey" : "pricingPage.pricingHeader.description"
        }
    },
    "openEventBanner" : {
        "iconKey" : "OPEN_EVENT_BANNER_LOGO",
        "titleItem" : {
            "textKey" : "pricingPage.openEventBanner.title"
        },
        "descriptionItem" : { 
            "textKey" : "pricingPage.openEventBanner.description"
        }
    },
    "pricingItems" : {
        "free" : {
            "title" : "pricingPage.pricingItem.free.title",
            "description" : ["pricingPage.pricingItem.free.description.0"],
            "membership" : {
                "titleKey" : "pricingPage.restrictions.membership.title",
                "descriptionKey" : "pricingPage.restrictions.membership.description"
            },
            "subscription" : {
                "titleKey" : "pricingPage.restrictions.subscription.title",
                "descriptionKey" : "pricingPage.restrictions.subscription.description"
            },
            "button" : "pricingPage.pricingItem.free.button"
        },
        "regular" : {
            "title" : "pricingPage.pricingItem.regular.title",
            "description" : ["pricingPage.pricingItem.regular.description.0", "pricingPage.pricingItem.regular.description.1"],
            "membership" : {
                "titleKey" : "pricingPage.restrictions.membership.title",
                "descriptionKey" : "pricingPage.restrictions.membership.description"
            },
            "subscription" : {
                "titleKey" : "pricingPage.restrictions.subscription.title",
                "descriptionKey" : "pricingPage.restrictions.subscription.description"
            },
            "button" : "pricingPage.pricingItem.regular.button"
        },
        "special" : {
            "title" : "pricingPage.pricingItem.special.title",
            "description" : ["pricingPage.pricingItem.special.description.0", "pricingPage.pricingItem.special.description.1"],
            "membership" : {
                "titleKey" : "pricingPage.restrictions.membership.title",
                "descriptionKey" : "pricingPage.restrictions.membership.description"
            },
            "subscription" : {
                "titleKey" : "pricingPage.restrictions.subscription.title",
                "descriptionKey" : "pricingPage.restrictions.subscription.description"
            },
            "button" : "pricingPage.pricingItem.special.button"
        }
    },
    "restrictions" : {
        "forms" : {
            "titleKey" : "pricingPage.restrictions.forms.title",
            "descriptionKey" : "pricingPage.restrictions.forms.description"
        },
        "formCode" : {
            "titleKey" : "pricingPage.restrictions.formCode.title",
            "descriptionKey" : "pricingPage.restrictions.formCode.description"
        },
        "uploadLine" : {
            "titleKey" : "pricingPage.restrictions.uploadLine.title",
            "descriptionKey" : "pricingPage.restrictions.uploadLine.description"
        },
        "monthlyLine" : {
            "titleKey" : "pricingPage.restrictions.monthlyLine.title",
            "descriptionKey" : "pricingPage.restrictions.monthlyLine.description"
        },
        "api" : {
            "titleKey" : "pricingPage.restrictions.api.title",
            "descriptionKey" : "pricingPage.restrictions.api.description"
        }
    }
}