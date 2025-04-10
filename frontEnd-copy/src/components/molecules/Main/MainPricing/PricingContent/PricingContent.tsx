import { Span } from "@/components/atoms/Span/Span";
import styles from "./PricingContent.module.css";
import { PricingContentProps } from "./PricingContent.types";
import { useIcon } from "@/hooks/UseIcons";
import { IMAGE_ICONS } from "@/constants/routes/IconRoutes/IconRoutes";
import { useTranslation } from "react-i18next";
import { BASIC_ICONS } from "@/constants/routes/IconRoutes/IconRoutes";
import { Image } from "@/components/atoms/Image/Image";

export const PricingContent : React.FC<PricingContentProps> = ({items}) => {
    const { t } = useTranslation("main");
    const { t: iconT } = useTranslation("icon");
    const { data: xMark, isLoading: xMarkIsLoading, error: xMarkError } = useIcon(BASIC_ICONS.icons["X_MARK"]);
    const { data: checkMark, isLoading: checkMarkIsLoading, error: checkMarkError } = useIcon(BASIC_ICONS.icons["CHECK_MARK"]);

    const itemsFiltered = Object.entries(items).filter(([_, value]) => value !== undefined);

    const mark = (item: number | boolean) => {
        const icons = item ? checkMark : xMark;
        
        if (icons) {
            return (
                    <Image image={icons.src} alt={iconT(icons.name)} width={icons.width} height={icons.height} />
            )
        }else{
            return (
                <></>
            )
        }
    }
    

    return (
        <div className={styles.pricingContent}>
            {itemsFiltered.map(([key, value]) => (
                <div key={key} className={styles.pricingContentItem}>
                    <div className={styles.pricingContentItemIcon}>
                        {mark(value as number | boolean)}
                    </div>
                    <div className={styles.pricingContentItemText}>
                        <Span fontSize={"font-size-18px font-weight-400 line-height-140 letter-spacing-05px white-space-nowrap"}>
                            {t(`pricingPage.restrictions.${key}.title`) + " "}
                        </Span>
                        <Span fontSize={"font-size-18px font-weight-600 line-height-140 letter-spacing-05px white-space-nowrap"}>
                        &nbsp;{typeof value === "number" ? value + " " + t(`pricingPage.restrictions.${key}.description`) : " " +t(`pricingPage.restrictions.${key}.description.${value ? "0" : "1"}`)}
                        </Span>
                    </div>
                </div>
            ))}
        </div>
    )
}
    