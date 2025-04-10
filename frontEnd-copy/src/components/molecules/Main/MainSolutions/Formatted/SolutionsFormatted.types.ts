import { FormattedTextProps } from "@/components/molecules/Basic/FormattedText/FormattedText.types";
import { TextKeyItem } from "@/constants/items/Main/Solutions/SolutionsItem.types";

export interface SolutionsFormattedProps {
    page: "main";
    defaultFontSize: string;
    items: {
        [key: string]: TextKeyItem[];
    };
}
