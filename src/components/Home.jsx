
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ user, setSearchText }) => {
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const searchValue = event.target.search.value.trim();
    setSearchText(searchValue);
    navigate('/search');
  };

  return (
    <div>
      <h1>Blog Post Website</h1>
      {user.name ? (
        <div>
          <h2>Welcome, {user.name}!</h2>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <div>
          <h2>Please login to see your information.</h2>
          <a href="/">Login</a>
        </div>
      )}
      <form onSubmit={handleSearch}>
        <input type="text" name="search" placeholder="Search posts..." required />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Home;
