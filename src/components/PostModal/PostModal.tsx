import { useState } from 'react';
import {
  HiOutlineHeart,
  HiOutlineChatBubbleLeft,
  HiOutlinePaperAirplane,
  HiOutlineBookmark,
  HiHeart,
  HiXMark,
} from 'react-icons/hi2';
import { HiBadgeCheck } from 'react-icons/hi';
import type { Post } from '../../types';
import { formatLikes } from '../../utils/format';
import './PostModal.css';

interface PostModalProps {
  post: Post;
  onClose: () => void;
}

export default function PostModal({ post, onClose }: PostModalProps) {
  const [liked, setLiked] = useState(false);
  const likes = liked ? post.likes + 1 : post.likes;

  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Publicación ampliada"
      >
        <button
          type="button"
          className="modal__close"
          onClick={onClose}
          aria-label="Cerrar"
        >
          <HiXMark />
        </button>

        <div className="modal__image-wrap">
          <img src={post.imageUrl} alt={post.caption} className="modal__image" />
        </div>

        <div className="modal__panel">
          <header className="modal__header">
            <img src={post.userAvatar} alt="" className="modal__avatar" />
            <span className="modal__username">{post.username}</span>
            {post.isVerified && (
              <HiBadgeCheck className="modal__verified" aria-label="Verificado" />
            )}
            <span className="modal__dot">·</span>
            <span className="modal__time">{post.timeAgo}</span>
          </header>

          <div className="modal__comments">
            <div className="modal__caption-row">
              <img src={post.userAvatar} alt="" className="modal__avatar-sm" />
              <p>
                <strong>{post.username}</strong> {post.caption}
              </p>
            </div>
            {post.comments.map((comment) => (
              <div key={comment.id} className="modal__comment">
                <img src={post.userAvatar} alt="" className="modal__avatar-sm" />
                <p>
                  <strong>{comment.username}</strong> {comment.text}
                </p>
              </div>
            ))}
            <p className="modal__date">Hace {post.timeAgo}</p>
          </div>

          <div className="modal__footer">
            <div className="modal__actions">
              <div className="modal__actions-left">
                <button
                  type="button"
                  onClick={() => setLiked(!liked)}
                  aria-label="Me gusta"
                >
                  {liked ? (
                    <HiHeart className="modal__icon modal__icon--liked" />
                  ) : (
                    <HiOutlineHeart className="modal__icon" />
                  )}
                </button>
                <button type="button" aria-label="Comentar">
                  <HiOutlineChatBubbleLeft className="modal__icon" />
                </button>
                <button type="button" aria-label="Compartir">
                  <HiOutlinePaperAirplane className="modal__icon" />
                </button>
              </div>
              <button type="button" aria-label="Guardar">
                <HiOutlineBookmark className="modal__icon" />
              </button>
            </div>

            <p className="modal__likes">{formatLikes(likes)} me gusta</p>

            <div className="modal__add">
              <input type="text" placeholder="Agrega un comentario..." readOnly />
              <button type="button" className="modal__post-btn" disabled>
                Publicar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
