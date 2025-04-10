
import { Span } from "@/components/atoms/Span/Span"
import { PricingProps } from "./Pricing.types"
import { MAIN_PRICING_ORGANISMS } from "@/constants/items/Main/Pricing/Pricing"
import { PricingHeader } from "./PricingHeader/PricingHeader"
import { OpenEventBanner } from "./OpenEventBanner/OpenEventBanner"
import { PricingPlans } from "./PricingPlans/PricingPlans"
import styles from "./Pricing.module.css"

export const Pricing : React.FC<PricingProps> = () => {
    return (
        <div className={styles.pricing}>
            <div className={styles.pricingHeader}>
                <PricingHeader items={MAIN_PRICING_ORGANISMS.pricingHeader}/>
            </div>
            <div className={styles.openEventBanner}>
                <OpenEventBanner items={MAIN_PRICING_ORGANISMS.openEventBanner}/>
            </div>
            <div className={styles.pricingPlans}>
                <PricingPlans items={MAIN_PRICING_ORGANISMS.pricingItems}/>
            </div>
        </div>
    )
}
