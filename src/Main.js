import './Main.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box } from '@chakra-ui/react'; // ✅ ChakraProvider 不需要再次引入
import { MotionBox, fadeInUp } from './Animation';

function Main() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Service'); // 點擊後跳轉
  };

  return (
    <MotionBox variants={fadeInUp} initial="hidden" animate="visible">
      <Box className='MainTopic'>
        <h1>高雄市榮服處管理系統</h1>
      </Box>

      <Box className='StartButton'>
        <Button
          onClick={handleClick}
          transition="all 0.3s ease-in-out"
          _hover={{
            transform: 'scale(1.2)',
            boxShadow: 'lg',
            bg: 'yellow.500',
          }}
        >
          Start Service
        </Button>
      </Box>
    </MotionBox>
  );
}

export default Main;
