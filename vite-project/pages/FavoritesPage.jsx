import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FavoriteTable from '../components/FavoriteTable';
import './FavoritesPage.css';

export default function FavoritesPage() {
  const [favs, setFavs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setFavs(JSON.parse(localStorage.getItem('favs') || '[]'));
  }, []);

  if (favs.length === 0) {
    return (
      <div className="empty-state">
        <p>You don't have any favs yet. Please add.</p>
        <button onClick={() => navigate('/packages')}>Add fav</button>
      </div>
    );
  }

  return (
    <div className="favs-page">
      <h2>Your favourite packages</h2>
      <FavoriteTable favs={favs} setFavs={setFavs} />
    </div>
  );
}
