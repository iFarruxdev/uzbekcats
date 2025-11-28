import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { Cat, Mail, Phone, MessageSquare, Send } from "lucide-react";
import "./Contact.css";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    if (!form.name.trim()) return "Ism kiritilishi shart";
    if (!form.email.trim()) return "Pochta kiritilishi shart";
    if (!form.subject.trim()) return "Mavzu kiritilishi shart";
    if (!form.message.trim()) return "Xabar kiritilishi shart";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const v = validate();
    if (v) {
      setError(v);
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || "Server xatosi");
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
      setError(err.message || "Yuborishda xato yuz berdi");
    }
  };


  return (
    <div>
      <Header />
      <div className="contact-page">
        <div className="contact-container">
          <div className="contact-header">
            <div className="header-icon-wrapper">
              <Cat className="header-icon" />
            </div>
            <h1 className="contact-title">Aloqa uchun</h1>
            <p className="contact-subtitle">
              Bizning yoqimli mushuklarimiz haqida savollaringiz bormi? yoki
              takliflaringiz? biz sizni savolingizni yoki taklifingizni albatta
              inobatga olamiz!
            </p>
          </div>

          <div className="contact-content">
            <div className="contact-info-section">
              <div className="info-card">
                <h2 className="info-card-title">Bog'lanish uchun ma'lumot</h2>

                <div className="info-list">
                  <div className="info-item">
                    <div className="info-icon-wrapper">
                      <Mail className="info-icon" />
                    </div>
                    <div className="info-text">
                      <h3 className="info-label">Pochta</h3>
                      <p className="info-value">djalilovfarruxdev@gmail.com</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon-wrapper">
                      <Phone className="info-icon" />
                    </div>
                    <div className="info-text">
                      <h3 className="info-label">Telefon raqam</h3>
                      <p className="info-value">+998 (91) 737-33-35</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon-wrapper">
                      <MessageSquare className="info-icon" />
                    </div>
                    <div className="info-text">
                      <h3 className="info-label">Ish vaqti</h3>
                      <p className="info-value">
                        Dushanba - Juma: 09:00 - 18:00
                      </p>
                      <p className="info-value">Shanba: 10:00 - 16:00</p>
                      <p className="info-value">Yakshanba: Yopiq</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="features-card">
                <h3 className="features-title">
                  Nima uchun bizni tanlash kerak?
                </h3>
                <ul className="features-list">
                  <li className="feature-item">
                    <span className="feature-emoji">🐱</span>
                    <span>Sog'lom mushuklar</span>
                  </li>
                  <li className="feature-item">
                    <span className="feature-emoji">❤️</span>
                    <span>Hayotiy qo'llab-quvvatlash va yo'l-yo'riq</span>
                  </li>
                  <li className="feature-item">
                    <span className="feature-emoji">🏆</span>
                    <span>
                      Butun mamlakat bo'ylab mushuk ixlosmandlari ishonchini
                      qozongan
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="form-card">
              <h2 className="form-title">Bizga xabar yuboring</h2>

              <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Ism *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="form-input"
                    placeholder="Ism hamda Familangiz..."
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Pochta *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="form-input"
                    placeholder="Elektron pochtangiz..."
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Telefon raqamingiz *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    pattern="^\+998\d{9}$"
                    required
                    className="form-input"
                    placeholder="+998 ___ __ __"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Mavzu *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="form-input"
                    placeholder="Nimani muhokama qilmoqchisiz?"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Xabar *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="form-textarea"
                    placeholder="So'rovingiz haqida ko'proq ma'lumot bering..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                {error && <p className="form-error">{error}</p>}
                {status === "success" && (
                  <p className="form-success">
                    Xabaringiz muvaffaqiyatli yuborildi ✅
                  </p>
                )}

                <button
                  type="submit"
                  className="form-button"
                  disabled={status === "sending"}
                >
                  <span className="form-button__wrapper">
                    <Send />
                    {status === "sending" ? "Yuborilmoqda..." : "Xabarni yuborish"}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
