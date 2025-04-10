import styles from "./Solutions.module.css" 
import { SolutionsProps } from "./Solutions.types"
import { MAIN_SOLUTIONS_ORGANISMS } from "@/constants/items/Main/Solutions/SolutionsItem"
import { HeroSectionOrganism } from "./HeroSectionOrganism/HeroSectionOrganism"
import { ProcessFlowOrganism } from "./ProcessFlowOrganism/ProcessFlowOrganism"
import { FeatureComparisonOrganism } from "./FeatureComparisonOrganism/FeatureComparisonOrganism"
import { AISolutionOrganism } from "./AISolutionOrganism/AISolutionOrganism"    
import { ProductScreenshotsOrganism } from "./ProductScreenshotsOrganism/ProductScreenshotsOrganism"
import { CTABannerOrganism } from "./CTABannerOrganism/CTABannerOrganism"

export const Solutions : React.FC<SolutionsProps> = () => {

    return (
        <div className={styles.solutions}>
            <div className={styles.heroSectionOrganism}>
                <HeroSectionOrganism items={MAIN_SOLUTIONS_ORGANISMS.heroSectionOrganism}/>
            </div>
            <div className={styles.processFlowOrganism}>
                <ProcessFlowOrganism items={MAIN_SOLUTIONS_ORGANISMS.processFlowOrganism}/>
            </div>
            <div className={styles.featureComparisonOrganism}>
                <FeatureComparisonOrganism items={MAIN_SOLUTIONS_ORGANISMS.featureComparisonOrganism}/>
            </div>
            <div className={styles.aiSolutionOrganism}>
                <AISolutionOrganism items={MAIN_SOLUTIONS_ORGANISMS.aiSolutionOrganism}/>
            </div>
            <div className={styles.productScreenshotsOrganism}>
                <ProductScreenshotsOrganism items={MAIN_SOLUTIONS_ORGANISMS.productScreenshotsOrganism}/>
            </div>
            <div className={styles.ctaBannerOrganism}>
                <CTABannerOrganism items={MAIN_SOLUTIONS_ORGANISMS.ctaBannerOrganism}/>
            </div>
        </div>
    )
}
