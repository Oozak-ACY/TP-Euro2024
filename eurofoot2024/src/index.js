import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './input.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Tirage } from './Tirage'
import { Pool } from './pages/Pool/Pool';
import { Match } from './pages/Match/Match';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/tirage" element={<Tirage />} />
      <Route path="/pool" element={<Pool />} />
      <Route path="/match" element={<Match />} />
    </Routes>
  </BrowserRouter>
);





