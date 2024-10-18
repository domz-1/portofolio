import React from 'react'; // Type: React
import { Card, CardProps } from "@mui/material"; // Card: React.ComponentType<CardProps>, CardProps: interface for Card properties
import { motion, MotionProps } from "framer-motion"; // motion: React.ComponentType<MotionProps>, MotionProps: interface for animation properties

// Create a custom motion component for Card
const MotionCard = motion(Card);

// Define the props for the AnimatedCard component
interface AnimatedCardProps extends CardProps, MotionProps {
  children: React.ReactNode; // Type: React.ReactNode
}

// AnimatedCard functional component
const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, ...props }) => {
  const { animationProps, className, ...cardProps } = props;

  return (
    <MotionCard
      className="project-card"
      {...animationProps}  
      {...cardProps}
    >
      {children}
    </MotionCard>
  );
};

export default AnimatedCard;