import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts }) => {
  // Check if posts is defined and is an array
  if (!posts || !Array.isArray(posts)) {
    return <p>No posts available</p>;
  }

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
