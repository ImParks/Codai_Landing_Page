import { TitleDescriptionItem } from "@/constants/items/Main/Main.types";
import { IconType } from "@/assets/icons/IconsType.types";
export interface AboutUsProps {
    logo?: IconType;
    aboutUs: {
        address: TitleDescriptionItem;
        mail: TitleDescriptionItem;
        phone: TitleDescriptionItem;
        businessRegistrationNumber: TitleDescriptionItem;
        mailOrderBusinessRegistrationNumber: TitleDescriptionItem;
    };
}
