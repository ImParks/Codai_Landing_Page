import { SolutionsPageProps } from "./SolutionsPage.types";
import { usePageTitle } from "@/services/common/hooks/usePageTitle";
import { useTranslation } from "react-i18next";
import { SolutionsTemplate } from "@/components/template/mainTemplate/SolutionsTemplate/SolutionsTemplate";
import styles from "./SolutionsPage.module.css";

export const SolutionsPage : React.FC<SolutionsPageProps> = ({titleKey}) => {
    const { t } = useTranslation('main');
    usePageTitle(t(titleKey));
    
    return (
        <div className={styles.solutionsPage}>
            <SolutionsTemplate />
        </div>
    )
}
