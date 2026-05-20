import {
  HiOutlineCog6Tooth,
  HiOutlineSquares2X2,
  HiOutlineBookmark,
} from 'react-icons/hi2';
import { currentUser } from '../../data';
import type { Post } from '../../types';
import { formatLargeNumber } from '../../utils/format';
import './Profile.css';

interface ProfileProps {
  posts: Post[];
  onOpenPost: (post: Post) => void;
}

export default function Profile({ posts, onOpenPost }: ProfileProps) {
  return (
    <main className="profile">
      <header className="profile__header">
        <img
          src={currentUser.avatar}
          alt={currentUser.username}
          className="profile__avatar"
        />

        <div className="profile__info">
          <div className="profile__top">
            <h1 className="profile__username">{currentUser.username}</h1>
            <button type="button" className="profile__edit">
              Editar perfil
            </button>
            <button
              type="button"
              className="profile__settings"
              aria-label="Configuración"
            >
              <HiOutlineCog6Tooth />
            </button>
          </div>

          <ul className="profile__stats">
            <li>
              <strong>{currentUser.postsCount}</strong> publicaciones
            </li>
            <li>
              <strong>{formatLargeNumber(currentUser.followers)}</strong> seguidores
            </li>
            <li>
              <strong>{currentUser.following}</strong> seguidos
            </li>
          </ul>

          <div className="profile__bio">
            <p className="profile__name">{currentUser.displayName}</p>
            <p>{currentUser.bio}</p>
            {currentUser.website && (
              <a
                href={`https://${currentUser.website}`}
                target="_blank"
                rel="noreferrer"
                className="profile__link"
              >
                {currentUser.website}
              </a>
            )}
          </div>
        </div>
      </header>

      <div className="profile__tabs">
        <button type="button" className="profile__tab profile__tab--active">
          <HiOutlineSquares2X2 />
          <span>PUBLICACIONES</span>
        </button>
        <button type="button" className="profile__tab">
          <HiOutlineBookmark />
          <span>GUARDADOS</span>
        </button>
      </div>

      <div className="profile__grid">
        {posts.map((post) => (
          <button
            key={post.id}
            type="button"
            className="profile__grid-item"
            onClick={() => onOpenPost(post)}
          >
            <img src={post.imageUrl} alt={post.caption} />
            <div className="profile__overlay">
              <span>❤ {formatLargeNumber(post.likes)}</span>
              <span>💬 {post.commentsCount}</span>
            </div>
          </button>
        ))}
      </div>
    </main>
  );
}
