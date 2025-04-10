import {PricingItemsProps as props} from "@/constants/items/Main/Pricing/Pricing.types"
export interface PricingPlansProps {
    items: props;
}



export interface ContentItem {
    forms?: number;
    formCode?: number;
    uploadLine?: number;
    monthlyLine?: number;
    api?: boolean;
  }
  
  export interface PricingItem {
    free: PricingItemContents;
    regular: PricingItemContents;
    special: PricingItemContents;
  }

  export interface PricingItemContents {
    price: number;
    monthlyFee: number;
    contents: ContentItem;
  }
  