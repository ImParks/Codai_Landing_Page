export type category ='main' | 'mainFooter' | 'image' | 'mainSolutions' | 'basicIcons';

export type IconLoadingState = 'idle' | 'loading' | 'loaded' | 'error';

export interface SidebarCategorySizes {
    [key: string]: { width: number, height: number }
}


export interface IconType {
    id: string;
    src: any;
    name: string;
    path?: string;
    width: number;
    height: number;
    category: category;
}


export interface IconMetadata {
    path?: string;
    width?: number;
    height?: number;
}

export interface Metadata {
    path?: string;
    width: number;
    height: number;
}


export interface IconWithLoadingState {
    icon: IconType[] | null;
    state: IconLoadingState;
    error?: Error;
  }