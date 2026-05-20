import { storyList } from '../../data';
import './Stories.css';

export default function Stories() {
  return (
    <div className="stories">
      <div className="stories__list">
        {storyList.map((story) => (
          <button key={story.username} type="button" className="stories__item">
            <div className="stories__ring">
              <img
                src={story.avatar}
                alt={story.username}
                className="stories__avatar"
              />
            </div>
            <span className="stories__username">{story.username}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
