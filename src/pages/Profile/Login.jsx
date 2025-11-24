import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../components/Context/AuthContext";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const phonePattern = /^\+998\d{9}$/;

    if (!phonePattern.test(phone)) {
      alert("Raqam +998XXXXXXXXX formatida bo'lishi kerak");
      return;
    }

    const firstNameValue = firstName.trim();
    const lastNameValue = lastName.trim();

    if (!firstNameValue) {
      alert('Iltimos ismingizni kiriting');
      setFirstName("");
      setLastName("");
      return;
    }

    if (!lastNameValue) {
      alert('Iltimos familayingiz kiriting');
      setLastName("");
      return;
    }

    localStorage.setItem("userPhone", phone);
    localStorage.setItem("userFirstName", firstName);
    localStorage.setItem("userLastName", lastName);

    login(phone);
    navigate("/");
  };
  return (
    <div className="login">
      <div className="login__container container">
        <div className="login__card">
          <h1 className="login__title">Uzbekcats</h1>
          <p className="login__subtitle">Ro'yxatdan o'tish</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              aria-label="user first-name"
              className="login__input"
              placeholder="Ismingiz..."
            />
            <input
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              aria-label="user last-name"
              className="login__input"
              placeholder="Familayingiz..."
            />
            <input
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              className="login__input"
              placeholder="+998 __ ___ __ __"
              required
              name="userPhone"
              pattern="\+998\d{9}"
              aria-label="user phone"
              value={phone}
            />
            <button type="submit" className="login__btn">
              Yuborish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
