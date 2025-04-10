import styles from './ServiceGuideSection.module.css';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/atoms/Button/Button';
import { Image } from '@/components/atoms/Image/Image';
import { ServiceGuideSectionProps } from './ServiceGuideSection.types';
import { Span } from '@/components/atoms/Span/Span';
import { useIcon } from '@/hooks/UseIcons';
import { BASIC_ICONS } from '@/constants/routes/IconRoutes/IconRoutes';

export const ServiceGuideSection: React.FC<ServiceGuideSectionProps> = ({items}) => {
    const { t } = useTranslation("main");
    const { t: imageT } = useTranslation("icon");
    const { data: downloadIcon } = useIcon(BASIC_ICONS.icons.DOWNLOAD);

    const handleDownload = (fileLink: string, fileName: string) => {
        fetch(fileLink)
            .then(response => response.blob())
            .then(blob => {
                // 파일 다운로드를 위한 링크 생성
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = fileName;
                
                // 링크 클릭하여 다운로드 시작
                document.body.appendChild(link);
                link.click();
                
                // cleanup
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
            })
            .catch(error => {
                console.error('파일 다운로드 중 오류 발생:', error);
            });
    };

    return (
        <div className={styles.serviceGuideSectionContainer}>
            <div className={styles.serviceGuideSectionTitleContainer}>
                <Span fontSize="font-size-40px font-weight-600 line-height-130 letter-spacing-05px text-align-center white-space-nowrap">
                    {t(items.title)}
                </Span>
            </div>
            <Span fontSize="font-size-18px font-weight-400 line-height-140 letter-spacing-05px text-align-center text-align-center white-space-nowrap">
                {t(items.description)}
            </Span> 
            <div className={styles.buttonContainer}>
                {items.buttonItem.map((button, index) => (
                    <Button 
                        key={button.textKey}
                        buttonType="button"     
                        onClick={() => handleDownload(button.fileLink, button.fileName || `download-${index + 1}.pdf`)}
                        className={index === 0 ? `${styles.service} ${styles.serviceButton}` : `${styles.userGuide} ${styles.serviceButton}`}
                    >
                        {downloadIcon && (
                            <Image 
                                image={downloadIcon.src}
                                alt={imageT(downloadIcon.name)}
                                width={downloadIcon.width} 
                                height={downloadIcon.height} 
                            />
                        )}
                        <Span fontSize="font-size-18px font-weight-600 line-height-100 line-spacing-25 text-align-center text-align-center white-space-nowrap">{t(button.textKey)}</Span>
                    </Button>
                ))}
            </div>
        </div>
    );
};
