import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MetaService } from '../MetaService';

export const usePageTitle = (titleKey: string) => {
    const { i18n } = useTranslation();
    const metaService = new MetaService(i18n);

    useEffect(() => {
        metaService.setPageTitle(titleKey);
    }, [titleKey, i18n.language]);
};