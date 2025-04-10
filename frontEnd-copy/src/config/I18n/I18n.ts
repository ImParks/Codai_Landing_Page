import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from '../../locales/index';

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'ko', //기본언어
        fallbackLng: 'en',
        ns: ['common', 'auth', 'main','icon', 'home'], // 네임스페이스
        defaultNS: 'common',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;