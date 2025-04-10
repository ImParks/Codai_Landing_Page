import { MotionProps } from "framer-motion";
import { ReactNode } from "react";

type AnimationDirection = 'none' | 'fromLeft' | 'fromRight' | 'fromBottom' | 'fromTop';

export interface ScrollAnimationProps {
    children: ReactNode;
    direction?: AnimationDirection;
    duration?: number;
    delay?: number;
    threshold?: number; // 요소가 얼마나 보여야 애니메이션이 시작될지
    className?: string;
    style?: React.CSSProperties;
    resetOnExit?: boolean;
  }



