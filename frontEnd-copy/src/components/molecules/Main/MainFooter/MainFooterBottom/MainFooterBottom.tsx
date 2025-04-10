import { NavLinkSpan } from "@/components/molecules/Basic/NavLink/NavLinkSpan/NavLinkSpan"
import { MAIN_FOOTER_ORGANISMS } from "@/constants/items/Main/Main"
import { LinkItem } from "@/constants/items/Main/Main.types"
import styles from "./MainFooterBottom.module.css"
import { useTranslation } from "react-i18next"  
import { MainFooterBottomProps } from "./MainFooterBottom.types"
import { IconType } from "@/assets/icons/IconsType.types"
import { Image } from "@/components/atoms/Image/Image"
import { Span } from "@/components/atoms/Span/Span"

export const MainFooterBottom : React.FC<MainFooterBottomProps> = ({icons}) => {
    const { t } = useTranslation("main");
    return (
        <div>
            <div className={styles.mainFooterOrganismsBottom}>
                <div className={styles.copyrightNotice}>
                    <Span className={"display-flex justify-content-start font-size-14px font-weight-400 line-height-14px"}>ⓒ 2025. Yesnet Corp. All Rights Reserved.</Span>
                </div>
                <div className={styles.mainFooterOrganismsBottomItem}>
                    {Object.values(MAIN_FOOTER_ORGANISMS.policy).map((item : LinkItem) => (
                        <div className={styles.mainFooterOrganismsBottomItemText} key={item.textKey}>
                            <NavLinkSpan key={item.textKey} text={t(item.textKey)} variant="item" style="darkTheme" baseRouteKey={item.baseRouteKey} pageRouteKey={item.pageRouteKey} />
                        </div>
                    ))}
                </div>
                <div className={styles.mainFooterOrganismsBottomSocial}>
                    {icons?.map((item : IconType) => (
                        <a 
                            key={item.id} 
                            className={styles.mainFooterOrganismsBottomSocialItem} 
                            href={item.path} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <Image 
                                width={item.width} 
                                height={item.height} 
                                id={item.id} 
                                alt={t(item.name)} 
                                image={item.src}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
