
import { getRoutePath } from "@/utils/GetRoutes/GetRoutes"
import { NavLinkImageProps } from "./NavLinkImage.types"  
import styles from "./NavLinkImage.module.css"
import { Link } from "@/components/atoms/Link/Link"
import { Image } from "@/components/atoms/Image/Image"
export const NavLinkImage : React.FC<NavLinkImageProps> = ({        
    baseRouteKey,
    pageRouteKey,
    variant,
    image
}) => {
    return (
        <Link to={getRoutePath(baseRouteKey,pageRouteKey)} variant={variant}>
            <div className={styles.mainHeaderOrganismsLeftItem}>
                <Image
                    width={image.width}
                    height={image.height}
                    id={image.id}
                    alt={image.name}
                    image={image.src}
                />  
            </div>
        </Link>
    )
}
