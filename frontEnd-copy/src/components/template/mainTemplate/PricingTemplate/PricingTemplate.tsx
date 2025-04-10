import { Pricing } from "@/components/organisms/MainOrganisms/Pricing/Pricing"
import styles from "./PricingTemplate.module.css"

export const PricingTemplate : React.FC = () => {
    return (
        <div className={styles.pricingTemplate}>
            <Pricing />
        </div>
    )
}
