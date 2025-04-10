// Main.types.ts

import { MainSolutionsOrganismsProps } from "./Solutions/SolutionsItem.types";
import { PricingOrganismsProps } from "./Pricing/Pricing.types";
import { UserGuideProps } from "./UserGuide/UserGuide.types";  

// 공통으로 사용되는 인터페이스
export interface LinkItem {
    textKey: string;
    baseRouteKey: string;
    pageRouteKey: string;
  }
  
  interface TitleDescriptionItem {
    titleKey: string;
    descriptionKey: string;
  }
  
  interface SocialItem {
    id: string;
    iconKey: string;
    textKey: string;
  }
  
  // 헤더 타입 정의
  export interface MainHeaderOrganismsProps {
    logo: string;
    items: {
      solution: LinkItem;
      pricePolicy: LinkItem;
      userGuide: LinkItem;
    };
    login: LinkItem;
  }
  
  // 푸터 타입 정의
  export interface MainFooterOrganismsProps {
    logo: string;
    aboutUs: {
      address: TitleDescriptionItem;
      mail: TitleDescriptionItem;
      phone: TitleDescriptionItem;
      businessRegistrationNumber: TitleDescriptionItem;
      mailOrderBusinessRegistrationNumber: TitleDescriptionItem;
    };
    policy: {
      termsOfUse: LinkItem;
      privacyPolicy: LinkItem;
      refundPolicy: LinkItem;
    };
    social: {
      homePage: SocialItem;
      blog: SocialItem;
      youtube: SocialItem;
    };
  }


  export interface MainItemsProps {
    headerOrganisms: MainHeaderOrganismsProps;
    solutionsOrganisms: MainSolutionsOrganismsProps;
    pricingOrganisms: PricingOrganismsProps;
    userGuideOrganisms: UserGuideProps;    
    footerOrganisms: MainFooterOrganismsProps;
  }
