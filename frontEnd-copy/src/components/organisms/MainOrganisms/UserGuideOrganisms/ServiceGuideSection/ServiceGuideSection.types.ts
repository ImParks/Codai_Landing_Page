import { ServiceGuideSectionProps as propsTypes } from "@/constants/items/Main/UserGuide/UserGuide.types"; 

interface ButtonItem {
    textKey: string;
    fileLink: string;
    fileName: string;
    style?: string;
}

export interface ServiceGuideSectionProps {
    items: {
        title: string;
        description: string;
        buttonItem: ButtonItem[];
    }
}   