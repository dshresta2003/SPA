import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Blog</h1>
      <p>This is a simple blog application built with React.</p>
      <Link to="/posts">View Posts</Link>
    </div>
  );
};

export default Home;