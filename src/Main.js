// Home page
import './Main.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChakraProvider, Button, theme, Box } from '@chakra-ui/react';
import customTheme from './theme';

function Main() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Service'); // 點擊後跳轉
  };
  return (
    <ChakraProvider theme={customTheme}>
        <div className='MainTopic'>
          <h1>高雄市榮服處管理系統</h1>
        </div>
        <div className='StartButton'>
          <Button onClick={handleClick}>Start Service</Button>
        </div>
    </ChakraProvider> 
  );
}

export default Main;
