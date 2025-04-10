import { MainHeaderTemplate } from "@/components/template/mainTemplate/HeaderTemplate/MainHeaderTemplate"
import { Outlet } from "react-router-dom"
import styles from "./MainLayout.module.css"
import { MainFooterTemplate } from "@/components/template/mainTemplate/MainFooterTemplate/MainFooterTemplate"

export const MainLayout: React.FC = () => {

    

    return (
        <div className={styles.mainLayout}>
            <div className={styles.mainLayoutHeader}>
                <div className={styles.mainLayoutHeaderInner}>
                    <MainHeaderTemplate />
                </div>
            </div>
            <div className={styles.mainLayoutContainer}>
                <div className={styles.mainLayoutBody}>
                    <Outlet />
                </div>
            </div>
            <div className={styles.mainLayoutFooter}>
                <div className={styles.mainLayoutFooterInner}>
                    <MainFooterTemplate />
                </div>
            </div>
        </div>
    );
  };