import { AISolutionOrganismProps } from "./AISolutionOrganism.types";
import styles from "./AISolutionOrganism.module.css";
import { SolutionsFormatted } from "@/components/molecules/Main/MainSolutions/Formatted/SolutionsFormatted";
import { useIcon } from "@/hooks/UseIcons";
import { MAIN_SOLUTIONS_ICONS } from "@/constants/routes/IconRoutes/IconRoutes";
import { Image } from "@/components/atoms/Image/Image";

export const AISolutionOrganism : React.FC<AISolutionOrganismProps> = ({items}) => {
    
    const { data: image1, isLoading: image1IsLoading, error: image1Error } = useIcon(MAIN_SOLUTIONS_ICONS.icons[items.image1]);
    const { data: image2, isLoading: image2IsLoading, error: image2Error } = useIcon(MAIN_SOLUTIONS_ICONS.icons[items.image2]);


    if (image1Error || image2Error) {
        return <div>Error loading image1</div>;
    }

    if (image1IsLoading || image2IsLoading) {
        return <div>Loading...</div>;
    }

    if (!image1 || !image2) {
        return <div>No image</div>;
    }

    return (
    <div className={styles.aiSolutionOrganism}>
        {image1 && <Image image={image1.src} alt={items.image1} width={image1.width} height={image1.height}/>}
        <div className={styles.aiSolutionOrganismContent}>
            <SolutionsFormatted page="main" items={items.descriptionItem} defaultFontSize={"font-size-20px font-weight-400 line-height-24px letter-spacing-05px"}/>
        </div>
        {image2 && <Image image={image2.src} alt={items.image2} width={image2.width} height={image2.height}/>} 
    </div>
    )
}
