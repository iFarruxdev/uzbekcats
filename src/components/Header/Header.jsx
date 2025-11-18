import { Link, NavLink } from "react-router-dom";
import { Menu } from 'lucide-react';
import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [showBar , setShowbar] = useState(false);

  return <header className="site-header">
    <div className="site-header__container container">
      <Link to="/" className="site-header__logo logo">Uzbekcats</Link>
      <ul className="site-header__list">
        <li className="site-header__item">
          <NavLink to="/" className="site-header__link">Bosh sahifa</NavLink>
        </li>
        <li className="site-header__item">
          <NavLink to="/about" className="site-header__link">Biz haqimizda</NavLink>
        </li>
        <li className="site-header__item">
          <NavLink to="/contact" className="site-header__link">Aloqa uchun</NavLink>
        </li>
      </ul>
      <Menu className="site-header__menu" onClick={() => setShowbar(!showBar)} />
      {showBar && <ul className="site-header__menu-list menu-list">
        <li className="menu-list__item">
          <NavLink to="/" className="site-header__link">Bosh sahifa</NavLink>
        </li>
        <li className="menu-list__item">
          <NavLink to="/about" className="site-header__link">Biz haqimizda</NavLink>
        </li>
        <li className="menu-list__item">
          <NavLink to="/contact" className="site-header__link">Aloqa uchun</NavLink>
        </li>
      </ul>}
    </div>
  </header>;
};

export default Header;