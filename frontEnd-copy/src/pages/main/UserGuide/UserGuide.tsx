import { useTranslation } from "react-i18next";
import { UserGuidePageProps } from "./UserGuide.types";
import { usePageTitle } from "@/services/common/hooks/usePageTitle";
import { MAIN_USER_GUIDE_ORGANISMS } from "@/constants/items/Main/UserGuide/UserGuide";
import { UserGuideTemplate } from "@/components/template/mainTemplate/UserGuideTemplate/UserGuideTemplate";
import styles from "./UserGuide.module.css";    
export const UserGuidePage : React.FC<UserGuidePageProps> = ({titleKey} ) => {
    const {t} = useTranslation("main");
    usePageTitle(t(titleKey));

    return (
        <div className={styles.userGuidePage}>
            <UserGuideTemplate items={MAIN_USER_GUIDE_ORGANISMS}/>
        </div>
    )   
}

