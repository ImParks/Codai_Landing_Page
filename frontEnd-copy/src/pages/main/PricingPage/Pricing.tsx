import { usePageTitle } from "@/services/common/hooks/usePageTitle";
import { PricingPageProps } from "./Pricing.types";
import { useTranslation } from "react-i18next";
import { PricingTemplate } from "@/components/template/mainTemplate/PricingTemplate/PricingTemplate";
import styles from "./Pricing.module.css";
export const PricingPage : React.FC<PricingPageProps> = ({titleKey}) => {
    const { t } = useTranslation("main");
    usePageTitle(t(titleKey));

    return (
        <div className={styles.pricingPage}>
            <PricingTemplate />
        </div>
    )
}