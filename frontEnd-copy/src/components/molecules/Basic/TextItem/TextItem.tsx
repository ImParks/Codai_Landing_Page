import { Span } from "@/components/atoms/Span/Span"
import { useTranslation } from "react-i18next"
import styles from "./TextItem.module.css"
import { TextItemProps } from "./TextItem.types";


export const TextItem : React.FC<TextItemProps> = ({titleKey, descriptionKey, variant, position}) => {
    const { t } = useTranslation("main");
    return (
        <div className={`${styles.textItem} ${styles[variant || ""]} ${styles[position || ""]}`}>
            <Span variant="title">
                {t(titleKey)}
            </Span>
            <Span variant="content">
                {t(descriptionKey)}
            </Span>
        </div>
    )
}
