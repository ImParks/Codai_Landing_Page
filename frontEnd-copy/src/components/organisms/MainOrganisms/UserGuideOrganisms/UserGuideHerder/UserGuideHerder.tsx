import { UserGuideHerderProps } from "./UserGuideHerder.types";
import styles from "./UserGuideHerder.module.css";
import { useTranslation } from "react-i18next";
import { Span } from "@/components/atoms/Span/Span";
export const UserGuideHerder: React.FC<UserGuideHerderProps> = ({items}) => {
    const { t } = useTranslation("main");
    return (
        <div className={styles.userGuideHerderContainer}>
            <div className={styles.userGuideHerderTitleContainer}>
                <Span fontSize="font-size-52px font-weight-600 line-height-130 letter-spacing-05px text-align-center white-space-nowrap">
                    {t(items.title)}
                </Span>
            </div>
            <div className={styles.userGuideHerderDescriptionContainer}>
                <Span fontSize="font-size-20px font-weight-400 line-height-140 letter-spacing-05px text-align-center white-space-nowrap">
                    {t(items.description)}
                </Span>
            </div>
        </div>
    )
}
