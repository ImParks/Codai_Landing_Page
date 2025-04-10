// Main.types.ts

// 공통으로 사용되는 인터페이스부터 정의
export interface TextKeyItem {
    textKey: string;
    formatters?: Array<{
      start: number;
      end?: number;
      className: string;
    }>;
  }
  
  interface ButtonItem extends TextKeyItem {
    baseRouteKey: string;
    pageRouteKey: string;
  }
  
  export interface TitleDescriptionSection {
    titleItem: {
      items: TextKeyItem[];
    };
    descriptionItem: {
      items: TextKeyItem[];
    };
  }
  
  
  // 각 organisms 타입 정의
  export interface HeroSectionOrganism extends TitleDescriptionSection {
    items: ButtonItem[];
    image: string;
    icon: string;
  }
  
  export interface ProcessFlowOrganism extends TitleDescriptionSection {
    image: string;
  }
  
  export interface FeatureComparisonOrganism extends TitleDescriptionSection {
    image: string;
  }
  
  export interface AISolutionOrganism {
    image1: string;
    descriptionItem: {
      items: TextKeyItem[];
    };
    image2: string;
  }
  
  export interface StepItem extends TitleDescriptionSection {
    index: string;
    image: string;
  }
  
  export interface ProductScreenshotsOrganism extends TitleDescriptionSection {
    items: {
      step1: StepItem;
      step2: StepItem;
      step3: StepItem;
      step4: StepItem;
    };
  }
  
  export interface CTABannerOrganism extends TitleDescriptionSection {
    items: ButtonItem[];
    image: string;
  }
  
  // 최종 export할 메인 인터페이스
  export interface MainSolutionsOrganismsProps {
    heroSectionOrganism: HeroSectionOrganism; 
    processFlowOrganism: ProcessFlowOrganism;
    featureComparisonOrganism: FeatureComparisonOrganism;
    aiSolutionOrganism: AISolutionOrganism;
    productScreenshotsOrganism: ProductScreenshotsOrganism;
    ctaBannerOrganism: CTABannerOrganism;
  }