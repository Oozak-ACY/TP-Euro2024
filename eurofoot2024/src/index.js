import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './input.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Tirage } from './Tirage'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/tirage" element={<Tirage />} />
    </Routes>
  </BrowserRouter>
);





