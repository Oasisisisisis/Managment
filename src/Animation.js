  // Animation.js
  import { motion, scale } from 'framer-motion';
  import { background, Box, transition } from '@chakra-ui/react';

  export const MotionBox = motion(Box);

  // 字幕由下往上淡入
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


  export const click = {
    whileTap:{
      scale: 0.8,
    transition:{
      duration: 0.1,
      },
    },
  };