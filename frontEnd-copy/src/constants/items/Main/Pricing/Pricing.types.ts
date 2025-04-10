// PricingPage.types.ts

// 공통으로 사용되는 인터페이스
  interface TextItem {
    textKey: string;
  }

  export interface ButtonItem {
    textKey: string;
    iconKey: string;
  }
  
  export interface TitleDescriptionItem {
    titleKey: string;
    descriptionKey: string;
  }

  export interface PricingHeaderProps {
    titleItem: TextItem;
    descriptionItem: TextItem;
  }

  export interface OpenEventBannerProps {
    iconKey: string;
    titleItem: TextItem;
    descriptionItem: TextItem;
  }
  
  export interface PricingItemProps {
    title: string;
    description: string[];
    membership: TitleDescriptionItem;
    subscription: TitleDescriptionItem;
    button: string;
  }

  export interface PricingItemsProps {
    free: PricingItemProps;
    regular: PricingItemProps;
    special: PricingItemProps;
  }

  export interface RestrictionsProps {
    forms: TitleDescriptionItem;
    formCode: TitleDescriptionItem;
    uploadLine: TitleDescriptionItem;
    monthlyLine: TitleDescriptionItem;
    api: TitleDescriptionItem;
  }

  export interface PricingOrganismsProps {
    pricingHeader: PricingHeaderProps;
    openEventBanner: OpenEventBannerProps;
    pricingItems: PricingItemsProps;
    restrictions: RestrictionsProps;
  }
  