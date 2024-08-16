import React from 'react';
import { useParams, Link } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams();

  // Simulated data
  const posts = [
    { id: 1, title: 'First Post', content: 'This is the first post content.' },
    { id: 2, title: 'Second Post', content: 'This is the second post content.' },
    { id: 3, title: 'Third Post', content: 'This is the third post content.' },
  ];

  const post = posts.find(post => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found!</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link to="/posts">Back to Posts</Link>
    </div>
  );
};

export default PostDetail;