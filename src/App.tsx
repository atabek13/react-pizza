import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import { Home } from './pages';
import { Favorite, Cart, NotFound } from './loadable';

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);
export default App;
