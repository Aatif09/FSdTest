import React from 'react';
import './BlogLayout.css';

const BlogLayout = () => {
  return (
    <div className="blog-container">
      <header className="header">
        <h1>Blog Post Website</h1>
        <div className="login">
          <p>Please <a href="/login">Login</a></p>
        </div>
      </header>

      <section className="search-section">
        <input type="text" placeholder="Search postsssss" />
        <button>Search</button>
      </section>
    </div>
  );
};

export default BlogLayout;