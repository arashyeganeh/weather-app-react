import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import "./styles/global.scss";
import Result from './pages/result/Result';
import Search from './pages/search/search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Search />} />
        <Route path='result' element={<Result />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
