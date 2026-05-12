import { NavLink } from 'react-router-dom';

const menuItems = [
  { to: '/', label: 'Home' },
  { to: '/design', label: 'Design' },
  { to: '/publishing', label: 'Publishing' },
  { to: '/frontend', label: 'Frontend' },
  { to: '#contact', label: 'Contact' }
];

function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <strong className="header__logo">My Portfolio</strong>
        <nav>
          <ul className="header__menu">
            {menuItems.map((item) => (
              <li key={item.label}>
                {item.to.startsWith('#') ? (
                  <a href={item.to}>{item.label}</a>
                ) : (
                  <NavLink to={item.to}>{item.label}</NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
