import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuPage from './pages/MenuPage';
import KitchenPage from './pages/KitchenPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/kitchen" element={<KitchenPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
