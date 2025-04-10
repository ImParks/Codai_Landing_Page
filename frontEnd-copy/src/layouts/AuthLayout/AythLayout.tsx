import { Outlet } from "react-router-dom"
import styles from "./AythLayout.module.css"

export const AuthLayout : React.FC = () => {
    return (
        <div className={styles.authLayout}>
            <Outlet />
        </div>
    )
}
