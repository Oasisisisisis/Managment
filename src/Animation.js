// Animation.js
import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';

export const MotionBox = motion(Box);

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};
