import { IconType, IconMetadata, Metadata, category, IconWithLoadingState, SidebarCategorySizes } from "./IconsType.types";
import { BASIC_ICONS_METADATA } from "./basicIcons/BasicIcons";  
import { IMAGE_METADATA } from "./image/Image";
import { MAIN_FOOTER_ICONS_METADATA } from "./mainFooter/MainFooter";
import { MAIN_SOLUTIONS_METADATA } from "./mainSolutions/MainSloutions";

const CATEGORY_DEFAULT_SIZES: SidebarCategorySizes = {
  icons_18px: { width: 18, height: 18 },
  image: { width: 24, height: 24 },
  mainFooter: { width: 24, height: 24 },
  mainSolutions: { width: 24, height: 24 },
  // user: { width: 28, height: 28 },
  // 다른 카테고리 추가...  
};

const METADATA: Record<string, IconMetadata> = {
  ...BASIC_ICONS_METADATA,
  ...IMAGE_METADATA,
  ...MAIN_FOOTER_ICONS_METADATA,
  ...MAIN_SOLUTIONS_METADATA
}   

export const getTranslationKey = (iconId: string): string => {
  return `icons.${iconId.replace(/\//g, '.')}`;
};

const normalizeIconPath = (path: string): string => 
  path.replace(/^\.\//, '').replace(/\.(png|jpe?g|svg)$/, '');


// 캐싱을 위한 객체들
const iconCache: Record<string, IconType> = {};
const categoryCache: Record<string, Record<string, IconType>> = {};


const getIconMetadata = (iconPath: string, category: string): Metadata => {
  // ICONS_METADATA에서 가져오거나, 없으면 CATEGORY_DEFAULT_SIZES에서 가져옵니다
  const iconMetadata: IconMetadata = METADATA[iconPath];
  // 기본값 메타데이터를 가져옵니다
  const defaultMetadata: Metadata = CATEGORY_DEFAULT_SIZES[category];
  // 반환할 메타데이터 객체 생성
  const returnMetadata: Metadata = {
    path: iconMetadata?.path,
    // width가 있으면 그 값을, 없으면 defaultMetadata의 width를, 그것도 없으면 기본값 0을 사용
    width: iconMetadata?.width !== undefined ? iconMetadata.width : 
      (defaultMetadata?.width !== undefined ? defaultMetadata.width : 0),
    // height도 같은 방식으로 처리
    height: iconMetadata?.height !== undefined ? iconMetadata.height : 
      (defaultMetadata?.height !== undefined ? defaultMetadata.height : 0)
  };
  
  return returnMetadata;
};


// 개별 아이콘 비동기 로드 함수 추가
export async function loadIconByPathAsync(iconPath: string): Promise<IconType> {
  // 캐시에 있으면 바로 반환
  if (iconCache[iconPath]) {
    return iconCache[iconPath];
  }
  
  // 비동기 로딩을 위해 eager: false 사용
  const iconModules = import.meta.glob('./**/*.{png,jpg,jpeg,svg}', { eager: false });
  
  // 모든 아이콘 파일 경로 가져오기
  const allPaths = Object.keys(iconModules);
  
  // 요청된 아이콘 경로와 일치하는 파일 찾기
  const fullPath = allPaths.find((path: string) => {
    return normalizeIconPath(path) === iconPath;
  });
  
  if (!fullPath) {
    throw new Error(`아이콘을 찾을 수 없음: ${iconPath}`);
  }
  
  // 모듈 비동기 로드
  const module = await iconModules[fullPath]();
  
  // 아이콘 정보 추출
  const normalizedPath = normalizeIconPath(fullPath);
  const pathParts = normalizedPath.split('/');
  const category = pathParts[0];
  const name = pathParts[pathParts.length - 1];
  
  // 메타데이터 가져오기
  const metadata = getIconMetadata(iconPath,category);
  

  
  // 아이콘 객체 생성
  const icon: IconType = {
    id: normalizedPath,
    src: module.default,
    name,
    category: category as category,
    ...metadata,
  };
  
  // 캐시에 저장
  iconCache[normalizedPath] = icon;
  
  return icon;
}




// 비동기 카테고리별 아이콘 로드 함수 추가
export async function loadIconsByCategoryAsync(category: category): Promise<Record<string, IconType>> {
  // 캐시에 있으면 바로 반환
  if (categoryCache[category]) {
    return categoryCache[category];
  }
  
  const icons: Record<string, IconType> = {};
  
  // 비동기 로딩을 위해 eager: false 사용
  const iconModules = import.meta.glob('./**/*.{png,jpg,jpeg,svg}', { eager: false });
  
  // 경로 필터링 (카테고리에 해당하는 파일만)
  const categoryPaths = Object.keys(iconModules).filter(path => {
    const normalizedPath = normalizeIconPath(path);
    const pathParts = normalizedPath.split('/');
    return pathParts[0] === category;
  });
  
  // 모든 모듈 병렬 로드
  const loadedModules = await Promise.all(
    categoryPaths.map(async path => {
      const module = await iconModules[path]();
      return { path, module };
    })
  );
  
  // 아이콘 객체 생성
  loadedModules.forEach(({ path, module }) => {
    const normalizedPath = normalizeIconPath(path);
    const pathParts = normalizedPath.split('/');
    const name = pathParts[pathParts.length - 1];

    const metadata = getIconMetadata(normalizedPath,category);

    const icon: IconType = {
      id: normalizedPath,
      src: module.default,
      name,
      category,
      ...metadata,
    };
    
    iconCache[normalizedPath] = icon;
    icons[normalizedPath] = icon;
  });
  
  // 카테고리 캐시에 저장
  categoryCache[category] = icons;
  

  
  return icons;
}

// 로딩 상태를 처리하는 카테고리별 아이콘 가져오기 함수
export async function getIconObjectsByCategoryWithLoadingState(
  category: category
): Promise<IconWithLoadingState> {
  try {
    // 로딩 상태 시작
    const result: IconWithLoadingState = {
      icon: null,
      state: 'loading'
    };
    
    // 카테고리별 아이콘 비동기 로드
    const categoryIcons = await loadIconsByCategoryAsync(category);
    
    // 로드 성공
    return {
      icon : Object.values(categoryIcons),
      state : 'loaded'
    };
  } catch (error) {
    // 로드 실패
    return {
      icon: null,
      state: 'error',
      error: error instanceof Error ? error : new Error('알 수 없는 오류')
    };
  }
}
