import styles from "./MainFooterTemplate.module.css"
import { MainFooterOrganisms } from "@/components/organisms/MainOrganisms/MainFooterOrganisms/MainFooterOrganisms"

export const MainFooterTemplate : React.FC = () => {
    return (
        <div className={styles.mainFooterTemplate}>
            <MainFooterOrganisms />
        </div>
    )
}
