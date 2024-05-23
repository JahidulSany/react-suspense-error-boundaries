import { useState } from 'react';
import './App.css';
import Comments from './components/Comments';
import PostSelector from './components/PostSelector';
export default function App() {
  const [selectedPostId, setSelectedPostId] = useState(null);
  
  const handleSelectPost = (e) => {
    setSelectedPostId(e.target.value);
  };
  return (
    <>
      <h1 className='text-3xl mb-2'>React Suspense and Error Boundaries</h1>
      <div className='text-2xl'>
        <PostSelector onSelectPost={handleSelectPost} />
        {selectedPostId && <Comments postId={selectedPostId} />}
      </div>
    </>
  );
}
