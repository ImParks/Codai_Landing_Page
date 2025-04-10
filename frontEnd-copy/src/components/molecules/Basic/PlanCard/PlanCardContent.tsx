import { Span } from "@/components/atoms/Span/Span"
import { useTranslation } from "react-i18next";
import { Image } from "@/components/atoms/Image/Image";
import { PlanCardContentProps } from "./PlanCardContent.types";
import styles from "./PlanCard.module.css";

export const PlanCardContent : React.FC<PlanCardContentProps> = ({items,icon}) => {
    const {t} = useTranslation("main");

    return (
        <div className={styles.PlanCardContent}>
            {items.map((value,index) => (
                <div key={index} className={styles.PlanCardContentLine}>
                    <div className={styles.PlanCardContentLineIcon}>
                        {icon && <Image image={icon.src} alt={icon.name} width={icon.width} height={icon.height}/>}    
                    </div>
                        <Span fontSize="font-size-18px font-weight-400 line-height-140 letter-spacing-05px">
                            {t(value.titleKey)}
                        </Span>
                        <Span fontSize="font-size-18px font-weight-600 line-height-140 letter-spacing-05px">
                            {t(value.descriptionKey)}
                        </Span>
                </div>
            ))}
        </div>
    )
}

