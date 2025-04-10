import { FeatureComparisonOrganismProps} from "./FeatureComparisonOrganism.types"
import styles from "./featureComparisonOrganism.module.css"
import { SolutionsFormatted } from "@/components/molecules/Main/MainSolutions/Formatted/SolutionsFormatted"
import { useIcon } from "@/hooks/UseIcons";
import { MAIN_SOLUTIONS_ICONS } from "@/constants/routes/IconRoutes/IconRoutes";
import {Image} from "@/components/atoms/Image/Image";
export const FeatureComparisonOrganism : React.FC<FeatureComparisonOrganismProps> = ({items}) => {

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
        <div className={styles.featureComparisonOrganism}>
            <div className={styles.featureComparisonOrganism}>                
                    <SolutionsFormatted page="main" items={items.titleItem} defaultFontSize={"font-size-40px font-weight-600 line-height-130 letter-spacing-05px"}/>
                    <SolutionsFormatted page="main" items={items.descriptionItem} defaultFontSize={"font-size-18px font-weight-400 line-height-140 letter-spacing-05px"}/>
            </div>
            <div className={styles.featureComparisonOrganismImage}>
                <Image image={image.src} alt={items.image} width={image.width} height={image.height}/>
            </div>
        </div>
    )
}
