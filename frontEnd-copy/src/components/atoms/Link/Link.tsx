import { Link as RouterLink } from 'react-router-dom';
import { LinkProps } from './Link.types';
import styles from "./Link.module.css";
export const Link: React.FC<LinkProps> = ({
    to, 
    children,
    variant = 'default',
}) => {
    return (

      <RouterLink
        className={`${styles.link} ${styles[variant]}`}
        to={to}
      >
        {children}
      </RouterLink>
    );
};