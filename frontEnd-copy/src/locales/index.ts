import ko_auth from './ko/auth.json';
import ko_icon from './ko/Icon.json';
import ko_home from './ko/home.json';
import ko_main from './ko/main.json';
export const resources = {
    ko: {
        auth: ko_auth,
        home: ko_home,
        icon: ko_icon,
        main: ko_main,
    // },
    // en: {
    //     auth: en_auth,
    //     common: en_common
    }
} as const;