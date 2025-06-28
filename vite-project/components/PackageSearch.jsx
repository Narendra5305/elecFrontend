import { useState } from 'react';
import './PackageSearch.css';

export default function PackageSearch({ onSelect }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSearch(e) {
    const value = e.target.value;
    setQuery(value);

    if (!value) {
      setSuggestions([]);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`https://api.npms.io/v2/search?q=${value}&size=3`);
      const data = await res.json();
      setSuggestions(data.results.map((r) => r.package.name));
    } catch (err) {
      console.error(err);
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search NPM packages…"
        value={query}
        onChange={handleSearch}
      />

      {loading && <div className="info">Loading…</div>}

      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((name) => (
            <li
              key={name}
              onClick={() => {
                onSelect(name);
                setQuery('');
                setSuggestions([]);
              }}
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
