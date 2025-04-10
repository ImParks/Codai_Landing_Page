
import { UserGuideTemplateProps } from "./UserGuideTemplate.types"
import styles from "./userGuideTemplate.module.css" 
import { UserGuideHerder } from "@/components/organisms/MainOrganisms/UserGuideOrganisms/UserGuideHerder/UserGuideHerder"
import { ServiceGuideSection } from "@/components/organisms/MainOrganisms/UserGuideOrganisms/ServiceGuideSection/ServiceGuideSection"
export const UserGuideTemplate : React.FC<UserGuideTemplateProps> = ({items}) => {
    return (
        <div className={styles.userGuideTemplate}> 
            <UserGuideHerder items={items.userGuideHerder}/>
            <ServiceGuideSection items={items.ServiceGuideSection}/>
        </div>
    )
}
