import { ProductScreenshotsOrganismProps, ProductScreenshotsOrganismItemTextProps,ProductScreenshotsOrganismItemImageProps } from "./ProductScreenshotsOrganism.types"
import styles from "./ProductScreenshotsOrganism.module.css"
import { SolutionsFormatted } from "@/components/molecules/Main/MainSolutions/Formatted/SolutionsFormatted"
import { useTranslation } from "react-i18next"
import { Span } from "@/components/atoms/Span/Span"
import { Image } from "@/components/atoms/Image/Image"
import { useIcon } from "@/hooks/UseIcons"
import { MAIN_SOLUTIONS_ICONS } from "@/constants/routes/IconRoutes/IconRoutes"


export const ProductScreenshotsOrganism : React.FC<ProductScreenshotsOrganismProps> = ({items}) => {

    const { t } = useTranslation('main');

    const item = (leftItem: React.ReactNode, rightItem: React.ReactNode) => {
        return (
            <div className={styles.productScreenshotsOrganismItem}>
                <div className={styles.productScreenshotsOrganismItemLeft}>
                        {leftItem}
                </div>
                <div className={styles.productScreenshotsOrganismItemRight}>
                    {rightItem}
                </div>
            </div>
        )
    }

    const ProductScreenshotsOrganismItemText : React.FC<ProductScreenshotsOrganismItemTextProps> = ({index, titleItem, descriptionItem}) => {
        
        return (
            <div className={styles.productScreenshotsOrganismItemText}>
                <div className={styles.productScreenshotsOrganismItemIndex}>
                    <Span fontSize="font-size-14px font-weight-600 line-height-140 letter-spacing-05px">{t(index)}</Span>
                </div>
                <div className={styles.productScreenshotsOrganismItemTextTitle}>
                    <SolutionsFormatted page="main" items={titleItem} defaultFontSize={"font-size-40px font-weight-600 line-height-130 letter-spacing-05px white-space-nowrap"}/>
                </div>  
                <div className={styles.productScreenshotsOrganismItemTextDescription}>
                    <SolutionsFormatted page="main" items={descriptionItem} defaultFontSize={"font-size-18px font-weight-400 line-height-140 letter-spacing-05px white-space-nowrap"}/>
                </div>
            </div>
        )
    }

    const ProductScreenshotsOrganismItemImage : React.FC<ProductScreenshotsOrganismItemImageProps> = ({item}) => {
        const { data: image, isLoading: imageIsLoading, error: imageError } = useIcon(MAIN_SOLUTIONS_ICONS.icons[item]);

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
            <div className={styles.productScreenshotsOrganismItemImage}>
                {image && <Image image={image.src} alt={image.id} width={image.width} height={image.height}/>}
            </div>
        )
    }

    return (
        <div className={styles.ProductScreenshotsOrganism}>
                <div className={styles.productScreenshotsOrganismText}>
                    <SolutionsFormatted page="main" items={items.titleItem} defaultFontSize={"font-size-60px font-weight-700 line-height-120 letter-spacing-05px"}/>
                    <SolutionsFormatted page="main" items={items.descriptionItem} defaultFontSize={"font-size-18px font-weight-400 line-height-140 letter-spacing-05px"}/>
                </div>
                <div className={styles.productScreenshotsOrganismItem}>
                    {item(
                        <ProductScreenshotsOrganismItemText index={items.items.step1.index} titleItem={items.items.step1.titleItem} descriptionItem={items.items.step1.descriptionItem}/>,
                        <ProductScreenshotsOrganismItemImage item={items.items.step1.image}/>
                    )}
                </div>
                <div className={styles.productScreenshotsOrganismItem}>
                    {item(
                        <ProductScreenshotsOrganismItemImage item={items.items.step2.image}/>,
                        <ProductScreenshotsOrganismItemText index={items.items.step2.index} titleItem={items.items.step2.titleItem} descriptionItem={items.items.step2.descriptionItem}/>
                    )}
                </div>
                <div className={styles.productScreenshotsOrganismItem}>
                    {item(
                        <ProductScreenshotsOrganismItemText index={items.items.step3.index} titleItem={items.items.step3.titleItem} descriptionItem={items.items.step3.descriptionItem}/>,
                        <ProductScreenshotsOrganismItemImage item={items.items.step3.image}/>
                    )}
                </div>
                <div className={styles.productScreenshotsOrganismItem}>
                    {item(
                        <ProductScreenshotsOrganismItemImage item={items.items.step4.image}/>,
                        <ProductScreenshotsOrganismItemText index={items.items.step4.index} titleItem={items.items.step4.titleItem} descriptionItem={items.items.step4.descriptionItem}/>
                    )}
                </div>
        </div>
    )
}
