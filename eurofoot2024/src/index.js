import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './input.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Pool } from './pages/Pool/Pool';
import { Match } from './pages/Match/Match';
import { Classement } from './pages/Classement/Classement';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pool" element={<Pool />} />
      <Route path="/match" element={<Match />} />
      <Route path="/classement" element={<Classement />} />
    </Routes>
  </BrowserRouter>
);





