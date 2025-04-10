import { ProcessFlowOrganismProps } from "./ProcessFlowOrganism.types";
import styles from "./ProcessFlowOrganism.module.css";
import { SolutionsFormatted } from "@/components/molecules/Main/MainSolutions/Formatted/SolutionsFormatted";
import { useTranslation } from "react-i18next";
import { useIcon } from "@/hooks/UseIcons";
import {MAIN_SOLUTIONS_ICONS } from "@/constants/routes/IconRoutes/IconRoutes";
import { Image } from "@/components/atoms/Image/Image";
export const ProcessFlowOrganism : React.FC<ProcessFlowOrganismProps> = ({items}) => {    
    const { t } = useTranslation("main");
    const { data: image, isLoading: imageIsLoading, error: imageError } = useIcon(MAIN_SOLUTIONS_ICONS.icons[items.image]);
    if (imageError) {
        return <div>Error loading image</div>;
    }

    if (imageIsLoading) {
        return <div>Loading...</div>;
    }
    if (!image) {
        return <div>No image</div>;
    }


    return (
        <div className={styles.processFlowOrganism} style={{height: image.height}}>
            <div className={styles.processFlowOrganismContent}>
                <div className={styles.processFlowOrganismTitle}>
                    <SolutionsFormatted page="main" items={items.titleItem} defaultFontSize={"font-size-40px font-weight-600 line-height-130 letter-spacing-05px"}/>
                </div>
                <div className={styles.processFlowOrganismDescription}>
                    <SolutionsFormatted page="main" items={items.descriptionItem} defaultFontSize={"font-size-18px font-weight-400 line-height-140 letter-spacing-05px"}/>
                </div>
            </div>
            <div className={styles.processFlowOrganismImage}>    
                {image && <Image image={image.src} alt={image.id} width={image.width} height={image.height}/>}
            </div>
        </div>
    )
}
