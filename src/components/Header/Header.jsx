import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import "./Header.css";
import { useContext, useState } from "react";
import { FavoritesContext } from "../FavoritesContext/FavoritesContext";

const Header = () => {
  const [showBar, setShowbar] = useState(false);

  const { favorites } = useContext(FavoritesContext);

  return (
    <header id="site-header" className="site-header">
      <div className="site-header__container container">
        <Link to="/" className="site-header__logo logo">
          UzbekCats
        </Link>
        <ul className="site-header__list">
          <li className="site-header__item">
            <NavLink to="/" className="site-header__link">
              Bosh sahifa
            </NavLink>
          </li>
          <li className="site-header__item">
            <NavLink to="/about" className="site-header__link">
              Biz haqimizda
            </NavLink>
          </li>
          <li className="site-header__item">
            <NavLink to="/contact" className="site-header__link">
              Aloqa uchun
            </NavLink>
          </li>
          <li className="menu-list__item">
            <NavLink to="/favorites" className="site-header__link">
              Sevimlilar {favorites.length > 0 && <span className="menu-list__count">{favorites.length}</span>}
            </NavLink>
          </li>
        </ul>
        <Menu
          className="site-header__menu"
          onClick={() => setShowbar(!showBar)}
        />
        {showBar && (
          <ul className="site-header__menu-list menu-list">
            <li className="menu-list__item">
              <NavLink to="/" className="site-header__link">
                Bosh sahifa
              </NavLink>
            </li>
            <li className="menu-list__item">
              <NavLink to="/about" className="site-header__link">
                Biz haqimizda
              </NavLink>
            </li>
            <li className="menu-list__item">
              <NavLink to="/contact" className="site-header__link">
                Aloqa uchun
              </NavLink>
            </li>
            <li className="menu-list__item">
              <NavLink to="/favorites" className="site-header__link">
                Sevimlilar {favorites.length > 0 && <span className="menu-list__count menu-list__count--mobile">{favorites.length}</span>}
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
