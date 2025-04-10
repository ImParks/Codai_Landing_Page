import { Span } from "@/components/atoms/Span/Span"
import { useTranslation } from "react-i18next"
import { OpenEventBannerProps } from "./OpenEventBanner.types";
import { useIcon } from "@/hooks/UseIcons";
import { Image } from "@/components/atoms/Image/Image";
import styles from "./OpenEventBanner.module.css";
import { IMAGE_ICONS } from "@/constants/routes/IconRoutes/IconRoutes";

export const OpenEventBanner : React.FC<OpenEventBannerProps> = ({items}) => {
    const { t } = useTranslation("main");
    const { t: imageT } = useTranslation("icon");
    const { data: image, isLoading: imageIsLoading, error: imageError } = useIcon(IMAGE_ICONS.icons[items.iconKey]);
    return (
        <div className={styles.openEventBanner}>
            <div className={styles.openEventBannerIconContainer}>
                <div className={styles.openEventBannerIcon}>
                    {image && <Image image={image.src} alt={imageT(items.iconKey)} width={image.width} height={image.height} />}
                </div>
            </div>
            <div className={styles.openEventBannerTitle}>
                <div className={styles.openEventBannerTitleText}>
                    <Span fontSize="font-size-32px font-weight-600 line-height-100 letter-spacing-05px white-space-nowrap">
                        {t(items.titleItem.textKey)}
                    </Span>
                </div>
                <div className={styles.openEventBannerTitleText}>
                    <Span fontSize="font-size-18px font-weight-400 line-height-100 letter-spacing-05px white-space-nowrap">
                        {t(items.descriptionItem.textKey)}
                    </Span> 
                </div>
            </div>
        </div>
    )
}

