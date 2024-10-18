import React from 'react';
import { Card, CardProps } from "@mui/material";
import { motion, MotionProps } from "framer-motion";

const MotionCard = motion(Card);

// Define animation props interface
interface AnimationConfig {
  initial?: any;
  whileInView?: any;
  viewport?: any;
  transition?: any;
}

// Extend both CardProps and MotionProps, plus add our custom props
export interface AnimatedCardProps extends Omit<CardProps, keyof MotionProps>, MotionProps {
  children: React.ReactNode;
  animationProps?: AnimationConfig;
  className?: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  children, 
  animationProps,
  className,
  ...props 
}) => {
  return (
    <MotionCard
      className={className}
      {...animationProps}
      {...props}
    >
      {children}
    </MotionCard>
  );
};

export default AnimatedCard;