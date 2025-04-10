import { FormattedText } from "../../../Basic/FormattedText/FormattedText";
import { SolutionsFormattedProps } from "./SolutionsFormatted.types";
import { TextKeyItem } from "@/constants/items/Main/Solutions/SolutionsItem.types";  

export const SolutionsFormatted : React.FC<SolutionsFormattedProps> = ({page, items, defaultFontSize}) => {
    return (
        <>
            {items.items.map((item:TextKeyItem) => (
                <div key={item.textKey}>
                    <FormattedText page={page} textKey={item.textKey} formatters={item.formatters} defaultFontSize={defaultFontSize}/>
                </div>
            ))}
        </>
    )   
}
