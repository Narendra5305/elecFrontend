import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PackagesPage from '../pages/PackagesPage';
import FavoritesPage from '../pages/FavoritesPage';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/packages" replace />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/favs" element={<FavoritesPage />} />
        </Routes>
      </div>
    </div>
  );
}
