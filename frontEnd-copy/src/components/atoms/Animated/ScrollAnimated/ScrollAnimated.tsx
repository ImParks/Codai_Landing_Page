// atoms/ScrollAnimation.tsx (수정 버전)
import React, { ReactNode, useEffect, useRef } from 'react';
import { motion, useAnimation, Variant } from 'framer-motion';
import { ScrollAnimationProps } from './ScrollAnimated.types';


export const ScrollAnimated: React.FC<ScrollAnimationProps> = ({
  children,
  direction = 'fromBottom',
  duration = 1,
  delay = 0,
  threshold = 0.1, // 기본값으로 10% 보이면 애니메이션 시작
  className = '',
  style = {},
  resetOnExit = true
}) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  // 애니메이션 방향에 따른 초기 상태 및 애니메이션 상태 설정
  const getAnimationVariants = () => {
    const variants: { hidden: Variant; visible: Variant } = {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1, 
        transition: { 
          duration, 
          delay,
          ease: "easeOut" 
        } 
      }
    };

    switch(direction) {
      case 'fromLeft':
        variants.hidden = { ...variants.hidden, x: -100 };
        variants.visible = { ...variants.visible, x: 0 };
        break;
      case 'fromRight':
        variants.hidden = { ...variants.hidden, x: 100 };
        variants.visible = { ...variants.visible, x: 0 };
        break;
      case 'fromBottom':
        variants.hidden = { ...variants.hidden, y: 100 };
        variants.visible = { ...variants.visible, y: 0 };
        break;
      case 'fromTop':
        variants.hidden = { ...variants.hidden, y: -100 };
        variants.visible = { ...variants.visible, y: 0 };
        break;
      default:
        break;
    }

    return variants;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        } else if (resetOnExit) {
          // resetOnExit 옵션이 true일 때만 리셋
          controls.start('hidden');
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls, threshold]);

  const variants = getAnimationVariants();

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ ...style }}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};