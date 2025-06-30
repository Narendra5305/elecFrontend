import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';
import './FavoriteTable.css';

export default function FavoriteTable({ favs, setFavs }) {
  const [toDelete, setToDelete] = useState(null);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const remaining = favs.filter((f) => f.id !== id);
    localStorage.setItem('favs', JSON.stringify(remaining));
    setFavs(remaining);
    navigate('/packages');
  };

  const handleEdit = (id) => {
    const fav = favs.find((f) => f.id === id);
    const newReason = prompt(`Edit reason for ${fav.package}:`, fav.reason);
    if (newReason && newReason.trim()) {
      const updated = favs.map((f) =>
        f.id === id ? { ...f, reason: newReason.trim() } : f
      );
      localStorage.setItem('favs', JSON.stringify(updated));
      setFavs(updated);
    }
  };

  const handleView = (id) => {
    const fav = favs.find((f) => f.id === id);
    alert(`${fav.package}\n\nReason: ${fav.reason}`);
  };

  return (
    <>
      <table className="fav-table">
        <thead>
          <tr>
            <th>Package Name</th>
            <th style={{ width: '160px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {favs.map((f) => (
            <tr key={f.id}>
              <td>{f.package}</td>
              <td className="actions">
                <button onClick={() => handleView(f.id)}> <img src="https://www.svgrepo.com/show/522528/eye.svg" alt="detail-img-btn"  className='detail-img-btn'/> </button>
                <button onClick={() => handleEdit(f.id)}> <img src="https://www.svgrepo.com/show/532988/pen-line.svg" alt="edit-img-btn" className='edit-img-btn' />  </button>
                <button  onClick={() => setToDelete(f.id)}>
                  <img  src="https://www.svgrepo.com/show/502614/delete.svg" alt="delete-logo" className='delete-img-btn'/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        open={toDelete !== null}
        onClose={() => setToDelete(null)}
        onConfirm={() => {
          handleDelete(toDelete);
          setToDelete(null);
        }}
      />
    </>
  );
}
