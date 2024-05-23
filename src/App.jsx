import { Suspense, useState } from 'react';
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
      <h1 className="text-3xl mb-2">React Suspense and Error Boundaries</h1>
      <div className="text-2xl">
        <Suspense fallback={<h1>Loading Posts...</h1>}>
          <PostSelector onSelectPost={handleSelectPost} />
        </Suspense>
        {selectedPostId && (
          <Suspense fallback={<h1>Loading Comments...</h1>}>
            <Comments postId={selectedPostId} />
          </Suspense>
        )}
      </div>
    </>
  );
}
