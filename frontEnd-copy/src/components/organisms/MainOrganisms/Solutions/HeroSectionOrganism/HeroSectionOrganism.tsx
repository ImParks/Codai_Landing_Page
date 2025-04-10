import { SolutionsFormatted } from "@/components/molecules/Main/MainSolutions/Formatted/SolutionsFormatted"
import { HeroSectionOrganismProps } from "./HeroSectionOrganism.types"
import { useTranslation } from "react-i18next"
import styles from "./HeroSectionOrganism.module.css"
import { useIcon } from "@/hooks/UseIcons"
import { Image } from "@/components/atoms/Image/Image"
import {MAIN_SOLUTIONS_ICONS } from "@/constants/routes/IconRoutes/IconRoutes"
import { IMAGE_ICONS } from "@/constants/routes/IconRoutes/IconRoutes"
export const HeroSectionOrganism : React.FC<HeroSectionOrganismProps> = ({items}) => {
    const { t } = useTranslation("main");
    const { t: imageT } = useTranslation("icon");
    const { data:icon, isLoading: iconIsLoading, error: iconError } = useIcon(IMAGE_ICONS.icons[items.icon]);
    const { data: image, isLoading: imageIsLoading, error: imageError } = useIcon(MAIN_SOLUTIONS_ICONS.icons[items.image]);

    return (
        <div className={styles.heroSectionOrganism}>
            <div className={styles.heroSectionOrganismContent}>
                {icon && <Image id={icon.id} image={icon.src} alt={t(icon.name)} width={icon.width} height={icon.height} />}
                <div className={styles.heroSectionOrganismTitle}>
                    <SolutionsFormatted page="main" items={items.titleItem} defaultFontSize={"font-size-48px font-weight-700 line-height-130 letter-spacing-05px white-space-nowrap"}/>
                </div>  
                <div className={styles.heroSectionOrganismDescription}>
                    <SolutionsFormatted page="main" items={items.descriptionItem} defaultFontSize={"font-size-18px font-weight-400 line-height-140 letter-spacing-05px white-space-nowrap"}/>
                </div>
                <div className={styles.heroSectionOrganismButton}>
                    {/* {t(items.button)} */}
                </div>
            </div>
            <div className={styles.heroSectionOrganismImage}>
                {image && <Image id={image.id} image={image.src} alt={t(image.name)} width={image.width} height={image.height} />}
            </div>
        </div>
    )

}