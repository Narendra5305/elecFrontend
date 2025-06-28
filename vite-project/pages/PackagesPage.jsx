import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PackageSearch from '../components/PackageSearch';
import './PackagesPage.css';

export default function PackagesPage() {
  const [selected, setSelected] = useState('');
  const [reason, setReason] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!selected || !reason.trim()) return;

    const favs = JSON.parse(localStorage.getItem('favs') || '[]');
    favs.push({ id: Date.now(), package: selected, reason: reason.trim() });
    localStorage.setItem('favs', JSON.stringify(favs));

    setSelected('');
    setReason('');
    navigate('/favs');
  }

  return (
    <div className="packages-page">
      <h2>Add a favourite NPM package</h2>

     
      <PackageSearch onSelect={setSelected} />
      {selected && (
        <p className="chosen">
          Chosen package: <strong>{selected}</strong>
        </p>
      )}

     
      <form onSubmit={handleSubmit} className="fav-form">
        <textarea
          placeholder="Why is this your fav?"
          rows="4"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
        <button type="submit" disabled={!selected || !reason.trim()}>
          Save fav
        </button>
      </form>
    </div>
  );
}
