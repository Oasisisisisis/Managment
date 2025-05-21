import './Service.css';
import { Icon, Box, Flex, Text } from "@chakra-ui/react";
import { FaCarCrash,FaSimCard } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Service() {
  const navigate = useNavigate()
  const clicktoMain = () => {
    navigate('/Main'); // 點擊後跳轉
  };
  const clicktoCar = () => {
    navigate('/Dispatch'); // 點擊後跳轉
  };
  const clicktoProperty = () => {
    navigate('/Property'); // 點擊後跳轉
  };
  return (
    <Box className='serviceContainer' p={10}>
      <Box className='serviceTitle' mb={6}>
        <h1>Service</h1>
      </Box>

      <Flex className='function' gap={300} justify={'center'}> {/* gap: 每個box的間距 */}
        {/* 第一個服務項目 */}
        <Box textAlign="center" onClick={clicktoCar} _hover={{bg: "gray.800"}}>
          <Icon as={FaCarCrash} w={300} h={300}/>
          <Text mt={2}>派車</Text>
        </Box>

        {/* 第二個服務項目 */}
        <Box textAlign="center" onClick={clicktoProperty} _hover={{bg: "gray.800"}}>
          <Icon as={FaSimCard} w={300} h={300} />
          <Text mt={2}>財產物品清點</Text>
        </Box>

        <Box textAlign="center" onClick={clicktoMain} _hover={{bg: "gray.800"}}>
          <Icon as={FaSimCard} w={300} h={300} />
          <Text mt={2}>回首頁</Text>
        </Box>
      </Flex>
    </Box>  
  );
}

export default Service;
