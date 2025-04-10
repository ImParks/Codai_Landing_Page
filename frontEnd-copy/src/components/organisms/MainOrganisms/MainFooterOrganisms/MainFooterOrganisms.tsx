
import { useIcon, useIcons } from "@/hooks/UseIcons";
import { AboutUs } from "@/components/molecules/Main/MainFooter/AboutUs/AboutUs";
import {MAIN_FOOTER_ORGANISMS} from "@/constants/items/Main/Main";
import styles from "./MainFooterOrganisms.module.css";
import { MainFooterBottom } from "@/components/molecules/Main/MainFooter/MainFooterBottom/MainFooterBottom";
import { MAIN_FOOTER_ICONS } from "@/constants/routes/IconRoutes/IconRoutes";
    
export const MainFooterOrganisms : React.FC = () => {
    const { data: footerIcons, isLoading: footerIconsIsLoading, error: footerIconsError } = useIcons(MAIN_FOOTER_ICONS.category);
    const { data: footerLogo, isLoading: footerLogoIsLoading, error: footerLogoError } = useIcon(MAIN_FOOTER_ICONS.icons.MAIN_FOOTER_LOGO);
    return (
        <div className={styles.mainFooterOrganisms}>
            <div className={styles.mainFooterOrganismsAboutUs}>
                <AboutUs logo={footerLogo} aboutUs={MAIN_FOOTER_ORGANISMS.aboutUs} /> 
            </div>
            <div className={styles.mainFooterOrganismsBottom}>
                <MainFooterBottom icons={footerIcons} />
            </div>
        </div>
    )
}
