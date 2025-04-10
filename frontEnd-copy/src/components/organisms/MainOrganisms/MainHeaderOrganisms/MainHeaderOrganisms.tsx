import { MainHeaderOrganismsProps } from "./MainHeaderOrganisms.types";
import styles from "./MainHeaderOrganisms.module.css";
import { MAIN_HEADER_ORGANISMS } from "@/constants/items/Main/Main";
import { useTranslation } from "react-i18next";
import { NavLinkSpan } from "@/components/molecules/Basic/NavLink/NavLinkSpan/NavLinkSpan";
import { useLocation } from "react-router-dom";
import { useIcon } from "@/hooks/UseIcons";
import { NavLinkImage } from "@/components/molecules/Basic/NavLink/NavLinkImage/NavLinkImage";
import { IMAGE_ICONS } from "@/constants/routes/IconRoutes/IconRoutes";
import { getRoutePath } from "@/utils/GetRoutes/GetRoutes";
import { MAIN } from "@/constants/routes/Routes/Routes";
export const MainHeaderOrganisms : React.FC<MainHeaderOrganismsProps> = () => {
    const {t} = useTranslation("main");
    const { data: logo, isLoading: logoIsLoading, error: logoError } = useIcon(IMAGE_ICONS.icons.MAIN_HEADER_LOGO);
    const items = MAIN_HEADER_ORGANISMS.items;
    const login = MAIN_HEADER_ORGANISMS.login;
    const reservation = MAIN_HEADER_ORGANISMS.reservation;

    const location = useLocation();
  
    const isActive = (itemPath: string) => {
        return location.pathname === itemPath;
    };  

    return (
        <div className={styles.mainHeaderOrganisms}>
                <div className={styles.mainHeaderOrganismsLogo}>
                    {logo && <NavLinkImage baseRouteKey={"MAIN"} pageRouteKey={"MAIN"} image={logo} variant="default"/>}
                </div>
                <div className={styles.mainHeaderOrganismsItems}>
                    {(Object.entries(items) as [keyof typeof items, typeof items[keyof typeof items]][]).map(
                        ([key, value]) => 
                            <div className={styles.mainHeaderOrganismsItemsItem} key={key}>
                                <NavLinkSpan
                                    baseRouteKey={value.baseRouteKey}
                                    pageRouteKey={value.pageRouteKey}
                                    variant="item"
                                    style={isActive(getRoutePath(value.baseRouteKey, value.pageRouteKey)) ? "active" : "mainHeaderItem"}
                                    fontSize={"font-size-16px font-weight-600 line-height-14px letter-spacing-25"}
                                    text={t(value.textKey)}
                                />
                            </div>
                        )
                    }
                </div>
                <div className={styles.mainHeaderOrganismsLogin}>
                    <div className={styles.loginItem}>
                        <NavLinkSpan
                            baseRouteKey={"MAIN"}
                            pageRouteKey={"MAIN"}
                            variant="item"
                            style="darkTheme"
                            text={t(login.textKey)}
                            fontSize={"font-size-16px font-weight-600 line-height-14px letter-spacing-05px"}
                        />
                    </div>
                </div>
        </div>
    )
}
