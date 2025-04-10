import { MainHeaderOrganisms } from "@/components/organisms/MainOrganisms/MainHeaderOrganisms/MainHeaderOrganisms"
import styles from "./MainHeaderTemplate.module.css"

export const MainHeaderTemplate : React.FC = () => {
    return (
        <div className={styles.mainHeaderTemplate}>
            <MainHeaderOrganisms />
        </div>
    )
}