import { Span } from "@/components/atoms/Span/Span"
import { getRoutePath } from "@/utils/GetRoutes/GetRoutes"
import { NavLinkSpanProps } from "./NavLinkSpan.types"  
import styles from "./NavLinkSpan.module.css"
import { Link } from "@/components/atoms/Link/Link"

export const NavLinkSpan : React.FC<NavLinkSpanProps> = ({
    baseRouteKey,
    pageRouteKey,
    variant,
    style = "mainHeaderItem",
    text,
    fontSize
}) => {
    return (
        <Link to={getRoutePath(baseRouteKey,pageRouteKey)} variant={variant}>
            <div className={`${styles.LinkItem} ${styles[style]}`}>
                <Span fontSize={fontSize}>{text}</Span>
            </div>
        </Link>
    )
}
