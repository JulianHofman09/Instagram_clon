import {
  HiOutlineHome,
  HiOutlineMagnifyingGlass,
  HiOutlineGlobeAlt,
  HiOutlineFilm,
  HiOutlinePaperAirplane,
  HiOutlineHeart,
  HiOutlinePlusCircle,
  HiOutlineBars3,
} from 'react-icons/hi2';
import { currentUser } from '../../data';
import type { ViewType } from '../../types';
import './Sidebar.css';

interface SidebarProps {
  activeView: ViewType;
  onNavigate: (view: ViewType) => void;
}

const menuItems = [
  { id: 'feed' as ViewType, label: 'Inicio', icon: HiOutlineHome },
  { id: null, label: 'Búsqueda', icon: HiOutlineMagnifyingGlass },
  { id: null, label: 'Explorar', icon: HiOutlineGlobeAlt },
  { id: null, label: 'Reels', icon: HiOutlineFilm },
  { id: null, label: 'Mensajes', icon: HiOutlinePaperAirplane },
  { id: null, label: 'Notificaciones', icon: HiOutlineHeart },
  { id: null, label: 'Crear', icon: HiOutlinePlusCircle },
  { id: 'profile' as ViewType, label: 'Perfil', icon: null, isProfile: true },
];

export default function Sidebar({ activeView, onNavigate }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo">Instagram</div>

      <nav className="sidebar__nav">
        {menuItems.map((item) => {
          const isActive = item.id !== null && item.id === activeView;
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              type="button"
              className={`sidebar__item ${isActive ? 'sidebar__item--active' : ''}`}
              onClick={() => item.id && onNavigate(item.id)}
            >
              {item.isProfile ? (
                <img
                  src={currentUser.avatar}
                  alt={currentUser.username}
                  className="sidebar__avatar"
                />
              ) : (
                Icon && <Icon className="sidebar__icon" />
              )}
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <button type="button" className="sidebar__item sidebar__more">
        <HiOutlineBars3 className="sidebar__icon" />
        <span>Más</span>
      </button>
    </aside>
  );
}
