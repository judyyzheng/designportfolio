import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import EntryScreen from './pages/entryscreen/EntryScreen';
import Home from './pages/Home';
import Project from './pages/matchbox/Project';
import TradeBookerPage from './pages/tradebooker/TradeBookerPage';
import Gallery from './pages/gallery/Gallery';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter,  
  Routes,
  Route, } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<EntryScreen />} />
      <Route path="/home" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/tradebooker" element={<TradeBookerPage />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
