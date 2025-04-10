import { useQuery } from '@tanstack/react-query';
import { category, IconType } from '../assets/icons/IconsType.types';
import { loadIconsByCategoryAsync , loadIconByPathAsync } from '../assets/icons/Icons';

// 카테고리별 아이콘 로드 훅
export function useIcons(category: category) {
  return useQuery({
    queryKey: ['icons', 'category', category],
    queryFn: async () => {
      const categoryIcons = await loadIconsByCategoryAsync(category);
      return Object.values(categoryIcons);
    },
    staleTime: 5 * 60 * 1000, // 5분 동안 데이터 유지
  });
}

// 개별 아이콘 로드 훅
export function useIcon(iconPath: string) {
  return useQuery({
    queryKey: ['icon', 'single', iconPath],
    queryFn: () => loadIconByPathAsync(iconPath),
    staleTime: 5 * 60 * 1000, // 5분 동안 데이터 유지
  });
}