import { ImageProps } from "./Image.types";
import styles from "./Image.module.css"

export const Image : React.FC<ImageProps> = ({id,image, alt, width, height}) => {
    if(!image) return null;

    return (
            <img id={id} className={styles.image} src={image} alt={alt} width={width} height={height} />
    )
}

    