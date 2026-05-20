import { HiOutlinePaperAirplane } from 'react-icons/hi2';
import './Header.css';

interface HeaderProps {
  title?: string;
}

export default function Header({ title = 'Instagram' }: HeaderProps) {
  return (
    <header className="header">
      <span className="header__logo">{title}</span>
      <button type="button" className="header__icon" aria-label="Mensajes">
        <HiOutlinePaperAirplane />
      </button>
    </header>
  );
}
