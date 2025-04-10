import { Span } from "@/components/atoms/Span/Span"
import { PricingHeaderProps } from "./PricingHeader.types"
import { useTranslation } from "react-i18next"
import styles from "./PricingHeader.module.css"
export const PricingHeader : React.FC<PricingHeaderProps> = ({items}) => {
    const { t } = useTranslation("main");
    return (
        <div className={styles.pricingHeader}>
            <Span fontSize="font-size-52px font-weight-600 line-130-25 text-align-center">
                {t(items.titleItem.textKey)}
            </Span>
            <Span fontSize="font-size-18px font-weight-400 line-140-25 text-align-center">
                {t(items.descriptionItem.textKey)}
            </Span>
        </div>
    )
}
