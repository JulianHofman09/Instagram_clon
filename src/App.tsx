import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Feed from './components/Feed/Feed';
import RightSidebar from './components/RightSidebar/RightSidebar';
import Profile from './components/Profile/Profile';
import PostModal from './components/PostModal/PostModal';
import { fetchCatPosts } from './services/catApi';
import type { Post, ViewType } from './types';
import './App.css';

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [activeView, setActiveView] = useState<ViewType>('feed');

  useEffect(() => {
    async function loadPosts() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchCatPosts();
        setPosts(data);
      } catch {
        setError('No se pudieron cargar las imágenes. Revisá tu conexión.');
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  function handleOpenPost(post: Post) {
    setSelectedPost(post);
  }

  function handleCloseModal() {
    setSelectedPost(null);
  }

  return (
    <div className="app">
      <Sidebar activeView={activeView} onNavigate={setActiveView} />
      <Header />

      <div className="app__layout">
        <div className="app__center">
          {activeView === 'feed' ? (
            <Feed
              posts={posts}
              loading={loading}
              error={error}
              onOpenPost={handleOpenPost}
            />
          ) : (
            <Profile posts={posts} onOpenPost={handleOpenPost} />
          )}
        </div>
        {activeView === 'feed' && <RightSidebar />}
      </div>

      {selectedPost && (
        <PostModal post={selectedPost} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
