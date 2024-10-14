// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Search from './components/Search';

function App() {
  const [user, setUser] = useState({ name: '', email: '' });
  const [searchText, setSearchText] = useState('');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/home" element={<Home user={user} setSearchText={setSearchText} />} />
        <Route path="/search" element={<Search searchText={searchText} />} />
      </Routes>
    </Router>
  );
}

export default App;
