import { IconType } from "@/assets/icons/IconsType.types";
import { TitleDescriptionItem } from "@/constants/items/Main/Pricing/Pricing.types";

export interface PlanCardContentProps {
    items: TitleDescriptionItem[];
    icon?: IconType;
}

