import { NavLink } from 'react-router-dom';

const menuItems = [
  { to: '/', label: 'Home' },
  { to: '/design', label: 'Design' },
  { to: '/publishing', label: 'Publishing' },
  { to: '/frontend', label: 'Frontend' }
];

function Header() {
  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="header">
      <div className="container header__inner">
        <strong className="header__logo">Sung Jaeung Portfolio</strong>
        <nav>
          <ul className="header__menu">
            {menuItems.map((item) => (
              <li key={item.label}>
                <NavLink to={item.to}>{item.label}</NavLink>
              </li>
            ))}
            <li>
              <button type="button" onClick={handleContactClick} className="header__contact">
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
