import type { i18n } from 'i18next';


export class MetaService {
    constructor(private i18n: i18n) {}

    setPageTitle(titleKey: string) {
        const t = this.i18n.t;
        const pageTitle = t(`${titleKey}`);
        document.title = `${pageTitle}`;
    }
} 