import { ProductScreenshotsOrganism, TitleDescriptionSection } from "@/constants/items/Main/Solutions/SolutionsItem.types";
import { StepItem } from "@/constants/items/Main/Solutions/SolutionsItem.types";

export interface ProductScreenshotsOrganismProps {
    items: ProductScreenshotsOrganism;
}


    
export interface ProductScreenshotsOrganismItemTextProps extends TitleDescriptionSection {
    index: string;
  } 

export interface ProductScreenshotsOrganismItemImageProps {
    item: string;
}
