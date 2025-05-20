// pages/Home.jsx
import './Main.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Service'); // 點擊後跳轉
  };

  return (
    <div>
      <h1>首頁</h1>
      <button onClick={handleClick}>跳轉到 Service 頁面</button>
    </div>
  );
}

export default Main;
