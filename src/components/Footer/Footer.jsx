import { Link } from "react-router-dom";
import "./Footer.css";
import TelegramIcon from '@mui/icons-material/Telegram';
import { Mail, Phone, MapPin, Instagram, ChevronUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
      <div className="footer-max-width">
        <div className="footer-grid">
          <div className="footer-section">
            <div className="footer-brand">
              <span className="footer-title">Uzbekcats</span>
            </div>
            <p className="footer-description">
            2020-yildan beri ajoyib mushuklar uchun mehrli uylar topib kelamiz. Har bir mushuk o‘ziga mos ideal egaga loyiq.
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Havolalar</h3>
            <ul className="footer-list">
              <li>
                <Link to="/about">Biz haqimizda</Link>
              </li>
              <li>
                <Link to="/favorites">Sevimlilar</Link>
              </li>
              <li>
                <a href="#care">Maxfiylik siyosati</a>
              </li>
              <li>
                <a href="#adoption">Garantiyalar</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Yordam</h3>
            <ul className="footer-list">
              <li>
                <Link to="/contact">Aloqa uchun</Link>
              </li>
              <li>
                <a href="#">Qanday xarid qilish</a>
              </li>
              <li>
                <a href="#privacy">To‘lov usullari</a>
              </li>
              <li>
                <a href="#terms">Tez-tez so‘raladigan savollar</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Aloqa uchun</h3>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={16} className="footer-contact-icon" />
                <span>O'zbekiston, Farg'ona, Qo'qon</span>
              </li>
              <li>
                <Phone size={16} className="footer-contact-icon" />
                <span>+998 (91) 737-33-35</span>
              </li>
              <li>
                <Mail size={16} className="footer-contact-icon" />
                <span>djalilovfarruxdev@gmail.com</span>
              </li>
            </ul>
            <div className="footer-socials">
              <a
                href="https://www.instagram.com/djalilovv.74/"
                aria-label="Instagram"
                className="footer-social-link"
                target="_blank"
              >
                <Instagram size={17} />
              </a>
              <a
                href="https://t.me/djalilovfarrux"
                aria-label="Telegram"
                className="footer-social-link footer-social-link--telegram"
                target="_blank"
              >
                <TelegramIcon size={17} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} UzbekCats. Barcha huquqlar himoyalangan.
          </p>
          <span onClick={() => { document.getElementById("site-header").scrollIntoView(); }} className="footer-bottom__top"><ChevronUp /></span>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
