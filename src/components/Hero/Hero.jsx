import { Cat, Heart, ShieldCheck, Sparkles } from "lucide-react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-section__container container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles className="badge-icon" />
              <span>O'zingizga hamroh toping</span>
            </div>

            <h1 className="hero-title">
              Xush kelibsiz
              <span className="hero-accent"> Orzuyingizdagi Mushuklar </span>
              Olamiga
            </h1>

            <p className="hero-description">
              Oilangizning bir qismiga aylanishga tayyor, yoqimli, sog‘lom va
              mehribon mushuklarni tanlang. Har bir mushuk do‘sti sog‘lik
              kafolati va umrbod qo‘llab-quvvatlash bilan birga keladi.
            </p>

            <div className="hero-buttons">
              <button onClick={() => { document.getElementById("products").scrollIntoView(); }} className="btn-primary">Mavjud mushuklarni ko‘rish
              </button>
              <button className="btn-secondary">Batafsil</button>
            </div>

            <div className="hero-features">
              <div className="feature">
                <ShieldCheck className="feature-icon" />
                <div>
                  <p className="feature-title">Sog‘lik kafolati</p>
                  <p className="feature-subtitle">Tasdiq va emlash</p>
                </div>
              </div>
              <div className="feature">
                <Heart className="feature-icon" />
                <div>
                  <p className="feature-title">Doimiy yordam</p>
                  <p className="feature-subtitle">Doimo shu yerdamiz</p>
                </div>
              </div>
              <div className="feature">
                <Cat className="feature-icon" />
                <div>
                  <p className="feature-title">Etik ko‘paytirish</p>
                  <p className="feature-subtitle">Mehr bilan o‘stirilgan</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-gallery">
            <div className="gallery-backdrop"></div>
            <div className="gallery-grid">
              <div className="gallery-column">
                <div className="cat-card">
                  <img loading="lazy"
                    src="https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Luna - British Shorthair"
                  />
                  <div className="cat-info">
                    <p className="cat-name">Luna</p>
                    <p className="cat-breed">British Shorthair</p>
                  </div>
                </div>
                <div className="cat-card">
                  <img loading="lazy"
                    src="https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Oliver - Maine Coon"
                  />
                  <div className="cat-info">
                    <p className="cat-name">Oliver</p>
                    <p className="cat-breed">Maine Coon</p>
                  </div>
                </div>
              </div>
              <div className="gallery-column gallery-column-offset">
                <div className="cat-card">
                  <img loading="lazy"
                    src="https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Milo - Persian"
                  />
                  <div className="cat-info">
                    <p className="cat-name">Milo</p>
                    <p className="cat-breed">Persian</p>
                  </div>
                </div>
                <div className="cat-card">
                  <img loading="lazy"
                    src="https://images.pexels.com/photos/982865/pexels-photo-982865.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Bella - Ragdoll"
                  />
                  <div className="cat-info">
                    <p className="cat-name">Bella</p>
                    <p className="cat-breed">Ragdoll</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
