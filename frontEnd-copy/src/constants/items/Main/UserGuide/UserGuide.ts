import { UserGuideProps } from "./UserGuide.types";

export const MAIN_USER_GUIDE_ORGANISMS: UserGuideProps = {
    "titleKey" : "userGuidePage.title",
    "userGuideHerder" : {
        "title" : "userGuidePage.userGuideHerder.title",
        "description" : "userGuidePage.userGuideHerder.description",
    },
    "ServiceGuideSection" : {
        "title" : "userGuidePage.ServiceGuideSection.title",
        "description" : "userGuidePage.ServiceGuideSection.description",
        "buttonItem" : [
            {
                "textKey" : "userGuidePage.ServiceGuideSection.button.0",
                "fileLink" : "/files/CoDAi_서비스소개서.pdf"
            },{
                "textKey" : "userGuidePage.ServiceGuideSection.button.1",
                "fileLink" : "/files/CoDAi_사용자매뉴얼.pdf"
            }
        ]
    }
}