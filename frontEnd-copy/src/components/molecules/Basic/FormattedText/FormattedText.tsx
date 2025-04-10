import { useTranslation } from "react-i18next";
import { FormattedTextProps } from "./FormattedText.types";
import { Span } from "../../../atoms/Span/Span";

export const FormattedText: React.FC<FormattedTextProps> = ({
  page,
  textKey,
  formatters = [],
  defaultFontSize
}) => {
  const { t } = useTranslation(page);
  const text = t(textKey) || ''; // 번역이 없을 경우 빈 문자열 사용
  // 포맷팅 없으면 그냥 반환
  if (formatters.length === 0) return <Span fontSize={defaultFontSize}>{text}</Span>;
  
  // 포맷터를 시작 위치에 따라 정렬
  const sortedFormatters = [...formatters].sort((a, b) => (a.start || 0) - (b.start || 0));
  
  // 포맷팅 정보에 따라 텍스트 분할 및 스타일 적용
  const segments = [];
  let lastIndex = 0;
  
  sortedFormatters.forEach(({ start = 0, end = -1, className }) => {
    // 시작 인덱스가 텍스트 길이를 초과하면 처리하지 않음
    if (start >= text.length) return;
    
    // 시작 위치가 이전 끝 위치보다 크면 텍스트 조각 추가
    if (start > lastIndex) {
      segments.push(
        <Span key={`plain-${lastIndex}`} fontSize={defaultFontSize}>
          {text.substring(lastIndex, start)}
        </Span>
      );
    }
    
    // 실제 종료 위치 계산 (end가 -1이거나 텍스트 길이를 초과하면 텍스트 끝까지)
    const actualEnd = end === -1 || end > text.length ? text.length : end;
    
    // 포맷팅된 텍스트 조각 추가
    if (actualEnd > start) {
      segments.push(
        <Span key={`formatted-${start}`} fontSize={className}>
          {text.substring(start, actualEnd)}
        </Span>
      );
    }
    
    lastIndex = actualEnd;
  });
  
  // 나머지 텍스트 추가
  if (lastIndex < text.length) {
    segments.push(
      <Span key={`plain-${lastIndex}`} fontSize={defaultFontSize}>
        {text.substring(lastIndex)}
      </Span>
    );
  }
  
  return <>{segments}</>;
};