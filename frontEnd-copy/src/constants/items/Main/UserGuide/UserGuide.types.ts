

export interface ButtonItem {
    textKey: string;
    fileLink: string;
  }

export interface UserGuideProps {
    titleKey: string;
    userGuideHerder: UserGuideHerderProps;
    ServiceGuideSection: ServiceGuideSectionProps;
  }

  export interface ServiceGuideSectionProps {
    title: string;
    description: string;
    buttonItem: ButtonItem[];
  }

  export interface UserGuideHerderProps {
    title: string;
    description: string;
  }


  
