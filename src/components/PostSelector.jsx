import { useEffect, useState } from 'react';
import fetchPosts from '../api/fetchPosts';

const resource = fetchPosts("https://jsonplaceholder.typicode.com/posts?_limit=5");

export default function PostSelector({ onSelectPost }) {
  const posts = resource.read();
  return (
    <select onChange={onSelectPost}>
      <option value="">Select Post</option>
      {posts.map((post) => (
        <option key={post.id} value={post.id}>
          {post.title}
        </option>
      ))}
    </select>
  );
}
