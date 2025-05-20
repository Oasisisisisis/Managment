// App.jsx 或 App.js
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main';
import Service from './Service';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Service" element={<Service />} />
      </Routes>
    </Router>
  );
}

export default App;
