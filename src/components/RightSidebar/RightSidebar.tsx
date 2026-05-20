import { currentUser, suggestionList } from '../../data';
import './RightSidebar.css';

export default function RightSidebar() {
  return (
    <aside className="right-sidebar">
      <div className="right-sidebar__user">
        <img
          src={currentUser.avatar}
          alt={currentUser.username}
          className="right-sidebar__avatar"
        />
        <div className="right-sidebar__info">
          <span className="right-sidebar__username">{currentUser.username}</span>
          <span className="right-sidebar__name">{currentUser.displayName}</span>
        </div>
        <button type="button" className="right-sidebar__switch">
          Cambiar
        </button>
      </div>

      <div className="right-sidebar__suggestions-header">
        <span>Sugerencias para vos</span>
        <button type="button">Ver todo</button>
      </div>

      <ul className="right-sidebar__list">
        {suggestionList.map((item) => (
          <li key={item.username} className="right-sidebar__suggestion">
            <img src={item.avatar} alt="" className="right-sidebar__sug-avatar" />
            <div className="right-sidebar__sug-info">
              <span className="right-sidebar__sug-user">{item.username}</span>
              <span className="right-sidebar__sug-sub">{item.subtitle}</span>
            </div>
            <button type="button" className="right-sidebar__follow">
              Seguir
            </button>
          </li>
        ))}
      </ul>

      <footer className="right-sidebar__footer">
        <nav className="right-sidebar__links">
          <a href="#">Información</a>
          <a href="#">Ayuda</a>
          <a href="#">Prensa</a>
          <a href="#">API</a>
          <a href="#">Empleo</a>
          <a href="#">Privacidad</a>
          <a href="#">Condiciones</a>
          <a href="#">Ubicaciones</a>
          <a href="#">Idioma</a>
        </nav>
        <p className="right-sidebar__copy">© 2026 INSTAGRAM FROM META</p>
      </footer>
    </aside>
  );
}
