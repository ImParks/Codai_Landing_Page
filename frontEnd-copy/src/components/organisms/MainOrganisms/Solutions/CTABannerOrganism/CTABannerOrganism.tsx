import { CTABannerOrganismProps } from "./CTABannerOrganism.types";
import styles from "./CTABannerOrganism.module.css";
import { MAIN_SOLUTIONS_ICONS } from "@/constants/routes/IconRoutes/IconRoutes";
import { useIcon } from "@/hooks/UseIcons";
import { NavLinkSpan } from "@/components/molecules/Basic/NavLink/NavLinkSpan/NavLinkSpan";
import { Image } from "@/components/atoms/Image/Image";
import { useTranslation } from "react-i18next";
import { SolutionsFormatted } from "@/components/molecules/Main/MainSolutions/Formatted/SolutionsFormatted";


export const CTABannerOrganism : React.FC<CTABannerOrganismProps> = ({items}) => {
    
    const { data: image, isLoading: imageIsLoading, error: imageError } = useIcon(MAIN_SOLUTIONS_ICONS.icons[items.image]);
    const { t } = useTranslation("main");


    return (
        <div className={styles.ctaBannerOrganism}>
            <div className={styles.ctaBannerOrganismText}>
                <SolutionsFormatted page="main" items={items.titleItem} defaultFontSize={"font-size-48px font-weight-700 line-height-130 letter-spacing-05px white-space-nowrap"}/>
                <SolutionsFormatted page="main" items={items.descriptionItem} defaultFontSize={"font-size-18px font-weight-400 line-height-140 letter-spacing-05px"}/>
                <div className={styles.ctaBannerOrganismButtonContainer}>
                    <div className={`${styles.ctaBannerOrganismButton} ${styles.ctaBannerOrganismLeftButton}`}>
                        <NavLinkSpan
                            baseRouteKey={items.items[0].baseRouteKey}
                            pageRouteKey={items.items[0].pageRouteKey}
                            style="darkTheme"
                            variant="item"
                            text={t(items.items[0].textKey)}
                        />
                    </div>
                    <div className={`${styles.ctaBannerOrganismButton} ${styles.ctaBannerOrganismRightButton}`}>
                        <NavLinkSpan
                            baseRouteKey={items.items[1].baseRouteKey}
                            pageRouteKey={items.items[1].pageRouteKey}
                            style="darkTheme"
                            variant="item"
                            text={t(items.items[1].textKey)}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.ctaBannerOrganismImage}>
                {image && <Image image={image.src} alt={items.image} width={image.width} height={image.height}/>}
            </div>
        </div>  
    )
}
