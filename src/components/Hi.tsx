import { Typography, Stack } from '@mui/material';
import Social from './Social';
import { motion } from 'framer-motion';

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const charVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const textOne = `Hi, I'm Adham 👋`;
const textTwo = `I'm a front-end developer with a passion for building fast, accessible, and visually stunning web applications. I love crafting responsive digital experiences that feel intuitive and look beautiful. My passion for the craft continues to grow every day.`;
const textThree = `📍 Egypt`;
const textFour = `🟢 Available for new projects`;

// Reusable component for animated text
const AnimatedText = ({ text }: { text: string }) => (
  <span>
    <motion.div variants={containerVariant} initial="hidden" animate="visible">
      {text.split("").map((char: string, index: number) => (
        <motion.span key={char + index} variants={charVariant}>
          {char}
        </motion.span>
      ))}
    </motion.div>
  </span>
);

export default function Hi() {
  return (
    <Stack>
      <Typography variant='h1' sx={{ textAlign: 'left' }}>
        <AnimatedText text={textOne} />
      </Typography>
      <br />
      <Typography
        variant='body1'
        sx={{
          whiteSpace: 'pre-wrap',
          lineHeight: 1.5,
          maxWidth: '500px',
          margin: '0 auto',
          textAlign: 'left',
        }}
      >
        <AnimatedText text={textTwo} />
      </Typography>
      <br />
      <Typography
        variant='h5'
        sx={{
          textAlign: 'left',
          lineHeight: 1.5,
        }}
      >
        <div>

        <AnimatedText text={textThree} />
        </div>
        <div>
        <AnimatedText   text={textFour} />
        </div>
      </Typography>
      <Social />
    </Stack>
  );
}
