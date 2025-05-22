// App.jsx 或 App.js
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main';
import Service from './Service';
import Dispatch from './Dispatch'
import Property from './Property'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} /> {/* 預設首頁 */}
        <Route path="/Main" element={<Main />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Dispatch" element={<Dispatch />} />
        <Route path="/Property" element={<Property />} />
      </Routes>
    </Router>
  );
}

export default App;
