import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MenuPage from './pages/MenuPage';
import KitchenPage from './pages/KitchenPage';

function App() {
  return (
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/kitchen" element={<KitchenPage />} />
      </Routes>
  );
}

export default App;
