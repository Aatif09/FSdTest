
import React, { useEffect, useState } from 'react';

const Search = ({ searchText }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!searchText) return;

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://dummyjson.com/posts/search?q=${searchText}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setResults(data.posts || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [searchText]);

  return (
    <div>
      <h1>Search Results</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {results.length > 0 ? (
        <ul>
          {results.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ) : (
        !loading && <p>No Results Found!</p>
      )}
    </div>
  );
};

export default Search;
