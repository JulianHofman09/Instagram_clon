import { useState } from 'react';
import {
  HiOutlineHeart,
  HiOutlineChatBubbleLeft,
  HiOutlinePaperAirplane,
  HiOutlineBookmark,
  HiHeart,
} from 'react-icons/hi2';
import { HiBadgeCheck } from 'react-icons/hi';
import type { Post as PostType } from '../../types';
import { formatLikes } from '../../utils/format';
import './Post.css';

interface PostProps {
  post: PostType;
  onOpen: (post: PostType) => void;
}

export default function Post({ post, onOpen }: PostProps) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const likes = liked ? post.likes + 1 : post.likes;

  return (
    <article className="post">
      <header className="post__header">
        <div className="post__user">
          <img src={post.userAvatar} alt="" className="post__avatar" />
          <span className="post__username">{post.username}</span>
          {post.isVerified && (
            <HiBadgeCheck className="post__verified" aria-label="Verificado" />
          )}
          <span className="post__dot">·</span>
          <span className="post__time">{post.timeAgo}</span>
        </div>
        <button type="button" className="post__more" aria-label="Opciones">
          ···
        </button>
      </header>

      <button
        type="button"
        className="post__image-btn"
        onClick={() => onOpen(post)}
        aria-label="Ver publicación"
      >
        <img src={post.imageUrl} alt={post.caption} className="post__image" />
      </button>

      <div className="post__actions">
        <div className="post__actions-left">
          <button
            type="button"
            className={`post__action ${liked ? 'post__action--liked' : ''}`}
            onClick={() => setLiked(!liked)}
            aria-label="Me gusta"
          >
            {liked ? (
              <HiHeart className="post__icon post__icon--filled" />
            ) : (
              <HiOutlineHeart className="post__icon" />
            )}
          </button>
          <button
            type="button"
            className="post__action"
            onClick={() => onOpen(post)}
            aria-label="Comentar"
          >
            <HiOutlineChatBubbleLeft className="post__icon" />
          </button>
          <button type="button" className="post__action" aria-label="Compartir">
            <HiOutlinePaperAirplane className="post__icon" />
          </button>
        </div>
        <button
          type="button"
          className="post__action"
          onClick={() => setSaved(!saved)}
          aria-label="Guardar"
        >
          <HiOutlineBookmark
            className={`post__icon ${saved ? 'post__icon--saved' : ''}`}
          />
        </button>
      </div>

      <div className="post__body">
        <p className="post__likes">{formatLikes(likes)} me gusta</p>
        <p className="post__caption">
          <strong>{post.username}</strong> {post.caption}
        </p>
        <button
          type="button"
          className="post__comments-link"
          onClick={() => onOpen(post)}
        >
          Ver los {post.commentsCount} comentarios
        </button>
        <p className="post__add-comment">Agrega un comentario...</p>
      </div>
    </article>
  );
}
