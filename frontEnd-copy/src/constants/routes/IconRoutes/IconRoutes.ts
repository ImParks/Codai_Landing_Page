import { IconRoutes } from "./IconRoutes.type";

export const SOCIAL_ICONS: IconRoutes = {
    category: "social",
    icons: {
        YESNET_INSTAGRAM: "social/YesnetInstagram",
        YESNET_HOME: "social/YesnetHome",
        YESNET_BLOG: "social/YesnetBlog",
        YESNET_YOUTUBE: "social/YesnetYoutube",
    }
}

export const SIDEBAR_ICONS: IconRoutes = {
    category: "sidebar",
    icons: {
        API_MANAGEMENT_ON: "sidebar/APIManagementOn",
        API_MANAGEMENT_OFF: "sidebar/APIManagementOff",
        HELP_ON: "sidebar/HelpOn",
        HELP_OFF: "sidebar/HelpOff",
        HOME_ON: "sidebar/HomeOn",
        HOME_OFF: "sidebar/HomeOff",
        PRODUCT_ON: "sidebar/ProductOn",
        PRODUCT_OFF: "sidebar/ProductOff",
        SETTING_ON: "sidebar/SettingOn",
        SETTING_OFF: "sidebar/SettingOff",
        WORKSPACE_ON: "sidebar/WorkspaceOn",
        WORKSPACE_OFF: "sidebar/WorkspaceOff"
    }
}

export const MAIN_SOLUTIONS_ICONS: IconRoutes = {
    category: "mainSolutions",
    icons: {
        MAIN_SOLUTIONS_1: "mainSolutions/MainSolutions1",
        MAIN_SOLUTIONS_2: "mainSolutions/MainSolutions2",
        MAIN_SOLUTIONS_3: "mainSolutions/MainSolutions3",
        MAIN_SOLUTIONS_4: "mainSolutions/MainSolutions4",
        MAIN_SOLUTIONS_5: "mainSolutions/MainSolutions5",
        MAIN_SOLUTIONS_6: "mainSolutions/MainSolutions6",    
        MAIN_SOLUTIONS_7: "mainSolutions/MainSolutions7",    
        MAIN_SOLUTIONS_8: "mainSolutions/MainSolutions8",
        MAIN_SOLUTIONS_9: "mainSolutions/MainSolutions9",
        MAIN_SOLUTIONS_10: "mainSolutions/MainSolutions10"
    }
}

export const MAIN_FOOTER_ICONS: IconRoutes = {
    category: "mainFooter",
    icons: {
        MAIN_FOOTER_LOGO: "image/MainFooterLogo",
        MAIN_FOOTER_HOME_PAGE: "mainFooter/MainFooterHomePage",
        MAIN_FOOTER_BLOG: "mainFooter/MainFooterBlog",
        MAIN_FOOTER_YOUTUBE: "mainFooter/MainFooterYoutube",
    }
}

export const IMAGE_ICONS: IconRoutes = {
    category: "image",
    icons: {
        
        MAIN_HEADER_LOGO: "image/MainHeaderLogo",
        OPEN_EVENT_BANNER_LOGO: "image/OpenEventBannerLogo",
        SYMBOL: "image/Symbol",
        WHITE_LOGO_16PX: "image/White_Logo_16px",
    }
}

export const BASIC_ICONS: IconRoutes = {
    category: "basicIcons",
    icons: {
        X_MARK: "basicIcons/X_Mark",
        CHECK_MARK: "basicIcons/Check_Mark",
        DOWNLOAD: "basicIcons/Download",
    }
}

export const Icons = {
    ...SOCIAL_ICONS,
    ...SIDEBAR_ICONS,
    ...MAIN_SOLUTIONS_ICONS,
    ...MAIN_FOOTER_ICONS,
    ...IMAGE_ICONS,
}