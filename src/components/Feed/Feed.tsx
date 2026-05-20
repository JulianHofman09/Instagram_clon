import Stories from '../Stories/Stories';
import Post from '../Post/Post';
import type { Post as PostType } from '../../types';
import './Feed.css';

interface FeedProps {
  posts: PostType[];
  loading: boolean;
  error: string | null;
  onOpenPost: (post: PostType) => void;
}

export default function Feed({ posts, loading, error, onOpenPost }: FeedProps) {
  if (loading) {
    return (
      <main className="feed">
        <p className="feed__status">Cargando publicaciones de gatos...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="feed">
        <p className="feed__status feed__status--error">{error}</p>
      </main>
    );
  }

  return (
    <main className="feed">
      <Stories />
      {posts.map((post) => (
        <Post key={post.id} post={post} onOpen={onOpenPost} />
      ))}
    </main>
  );
}
