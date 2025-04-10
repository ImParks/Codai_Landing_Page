import { SpanProps } from "./Span.types";
import styles from "./Span.module.css";

export const Span: React.FC<SpanProps> = ({ children, variant, className, fontSize }) => {
  // className을 공백으로 분리하여 각각의 클래스 처리
  const fontSizes = fontSize?.split(' ') || [];
  
  // 각 클래스 이름을 CSS 모듈에서 찾아 변환
  const convertedClassNames = fontSizes.map(font => {
    // CSS 모듈에 해당 클래스가 있으면 변환, 없으면 그대로 사용
    return styles[font] || font;
  });


  return (
    <span className={`${styles.span} ${className} ${styles[variant || '']} ${convertedClassNames.join(' ')}`}>
      {children}
    </span>
  );
};


