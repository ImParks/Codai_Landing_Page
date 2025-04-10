import { AboutUsProps } from "./AboutUs.types"
import styles from "./AboutUs.module.css"
import { TextItem } from "@/components/molecules/Basic/TextItem/TextItem"
import { Image } from "@/components/atoms/Image/Image"
import { useTranslation } from "react-i18next"
export const AboutUs : React.FC<AboutUsProps> = ({logo, aboutUs}) => {
    const { t } = useTranslation("icon");

    const titleFontSize = "font-size-15px font-weight-600 line-height-20px";
    const descriptionFontSize = "font-size-15px font-weight-300 line-height-20px";

    return (
        <div className={styles.aboutUs}>
            <div className={styles.aboutUsLogo}>
                {logo && <Image id={logo.id} image={logo.src} alt={t(logo.name)} width={logo.width} height={logo.height} />}
            </div>
            <div className={styles.aboutUsContent}>
                <div className={styles.aboutUsContentItem}>
                    <TextItem titleKey={aboutUs.address.titleKey} descriptionKey={aboutUs.address.descriptionKey} position="left" />
                </div>
                <div className={styles.aboutUsContentItem}>
                    <TextItem titleKey={aboutUs.mail.titleKey} descriptionKey={aboutUs.mail.descriptionKey} position="left" />
                    <TextItem titleKey={aboutUs.phone.titleKey} descriptionKey={aboutUs.phone.descriptionKey} position="right" />
                </div>
                <div className={styles.aboutUsContentItem}>
                    <TextItem titleKey={aboutUs.businessRegistrationNumber.titleKey} descriptionKey={aboutUs.businessRegistrationNumber.descriptionKey} position="left" />
                    <TextItem titleKey={aboutUs.mailOrderBusinessRegistrationNumber.titleKey} descriptionKey={aboutUs.mailOrderBusinessRegistrationNumber.descriptionKey} position="right" />
                </div>
            </div>
        </div>
    )
}
