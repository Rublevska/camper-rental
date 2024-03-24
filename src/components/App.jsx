import CatalogPage from 'pages/Catalog/Catalog';
import FavoritePage from 'pages/Favorite/FavoritePage';
import HomePage from 'pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './AppLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
      </Route>
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};
