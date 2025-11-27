import React from "react";
import Header from "../../components/Header/Header";
import { Award, Cat, Heart, Users } from "lucide-react";
import "./About.css";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <div>
      <Header />
      <div className="about-container">
        <div className="about-header">
          <div className="about-icon">
            <Cat size={64} color="var(--accent-color)" />
          </div>
          <h1>Biz haqimizda</h1>
          <p>
            Biz mehribon oilalarga o‘zlari uchun to‘g‘ri mushuk do‘stini
            topishga yordam beramiz. 5 yildan ortiq vaqtdan beri, biz o‘z
            qaramog‘imizdagi har bir mushukning salomatligi, baxti va
            farovonligi uchun chin dildan g‘amxo‘rlik qilib kelmoqdamiz.
          </p>
        </div>

        <div className="about-cards">
          <div className="about-card">
            <div className="card-icon-container">
              <Heart size={28} color="#fff" />
            </div>
            <h3>Bizning vazifamiz</h3>
            <p>
              Bizning maqsadimiz — mehribon oilalarga, bir-biridan yoqimtoy va
              sog‘lom mushuklarni yetkazib berish. Saytimiz orqali mushuk
              izlayotgan insonlar uchun ishonchli tanlov va sifatli xizmatni
              taqdim etamiz.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon-container">
              <Award size={28} color="#fff" />
            </div>
            <h3>Bizning talablarimiz</h3>
            <p>
              Mushuklarimizning barchasi malakali veterinarlardan tibbiy ko‘rik,
              sifatli oziqlanish va mehrli parvarish oladi. Biz tasdiqlangan
              veterinariya mutaxassislari bilan ishlaymiz.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon-container">
              <Users size={28} color="#fff" />
            </div>
            <h3>Bizning hamjamiyat</h3>
            <p>
              Biz mushuksevarlar va mushuk egalari jam bo‘lgan do‘stona
              hamjamiyatmiz. Bu yerda odamlar o‘z tajribasi, maslahati va
              mehrini ulashadi.
            </p>
          </div>
        </div>

        <div className="stats-section">
          <div className="stats-left">
            <div className="stat">
              <div className="stat-number">5+</div>
              <div className="stat-label">Yillik tajriba</div>
            </div>
            <div className="stat">
              <div className="stat-number">5,000+</div>
              <div className="stat-label">Xursand mijozlarimiz</div>
            </div>
            <div className="stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Sog'liq kafolati</div>
            </div>
          </div>
          <div className="stats-right">
            <h2>Nega aynan biz?</h2>
            <div className="benefits-list">
              <div className="benefit-item">
                <div className="benefit-dot"></div>
                <p>
                  <span className="benefit-title">
                    Sog‘liq birinchi o‘rinda:
                  </span>{" "}
                  Har bir mushuk to‘liq sog‘liq, emlashlari va sog‘liq kafolat
                  bilan birga!
                </p>
              </div>
              <div className="benefit-item">
                <div className="benefit-dot"></div>
                <p>
                  <span className="benefit-title">Axloqiy me’yorlar:</span>{" "}
                  Mushuklarimizning sog‘ligi, xavfsizligi va farovonligi har
                  doim birinchi o‘rinda turadi.
                </p>
              </div>
              <div className="benefit-item">
                <div className="benefit-dot"></div>
                <p>
                  <span className="benefit-title">
                    Doimiy qo‘llab-quvvatlash:
                  </span> Mushukni yangi uyga topshirganimizdan keyin ham sizni
                  qo‘llab-quvvatlashni davom ettiramiz. Biz har doim maslahat,
                  yordam va tajriba bilan yordam berishga tayyormiz.
                </p>
              </div>
              <div className="benefit-item">
                <div className="benefit-dot"></div>
                <p>
                  <span className="benefit-title">Ideal moslik:</span> Sizga eng mos mushukni tanlashda yordam beramiz.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-footer">
          <p>
            Biz sizga o‘zingizga mos mushuk bilan tanishishingizga yordam
            berishni intiqlik bilan kutmoqdamiz!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
