import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../components/Context/AuthContext";

const Login = () => {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const phonePattern = /^\+998\d{9}$/;

    if (!phonePattern.test(phone)) {
      alert("Raqam +998XXXXXXXXX formatida bo'lishi kerak");
      return;
    }

    localStorage.setItem('userPhone' , phone);

    login(phone);
    navigate("/");
  }
  return (
    <div className="login">
      <div className="login__container container">
        <div className="login__card">
          <h1 className="login__title">Uzbekcats</h1>
          <p className="login__subtitle">Telefon raqamingizni kiriting</p>
          <form onSubmit={handleSubmit}>
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
            <button type="submit" className="login__btn">Kirish</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
