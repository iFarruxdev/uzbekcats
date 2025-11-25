import Header from "../../components/Header/Header";
import "./Shopping.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../components/Context/CartContext";

const Shopping = () => {

  const { cart , clearCart } = useContext(CartContext);

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="site-shopping">
      <Header />
      <div className="site-shopping-promo__container container">
        <div className="site-shopping__promo">
          <h2 className="site-shopping__title">Savatchadagi mushukar</h2>
          {cart.length <= 0 && <p className="site-shopping__info">Hozircha mavjud emas !</p>}
        </div>
      </div>
      {cart.length > 0 && (
        <section className="site-shopping__items shopping-items">
          <div className="shopping-items__container container">
            <div className="shopping-items__cat-dess">
              {cart.map((item) => {
                return (
                  <div key={item.id} className="shopping-item__cat-dess">
                    <img className="cat-dess__image" src={item.image} />
                    <div className="cat-dess__content">
                      <h3 className="cat-dess__info">
                        <span>Mushukni ismi: </span>
                        {item.name}
                      </h3>
                      <h3 className="cat-dess__info">
                        <span>Mushukni zoti: </span>
                        {item.breed}
                      </h3>
                      <h3 className="cat-dess__info cat-dess__info--price">
                        <span>Mushukni narxi: </span>
                        {(item.price * item.qty).toFixed(3)} UZS
                      </h3>
                      <h3 className="cat-dess__info cat-dess__info--price">
                        <span>Mushukni miqdori: </span>
                        {item.qty}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="shopping-items__cat-order cat-order">
              <h2 className="cat-order__title">Buyurtma xulosasi</h2>
              <ul className="cat-order__list">
                <li className="cat-order__item">
                  <span>Buyum ({cart.length})</span>
                  {totalPrice.toFixed(3)} UZS
                </li>
                <li className="cat-order__item">
                  <span>Yetkazib berish</span>
                  Mutlaqo bepul
                </li>
              </ul>
              <div className="genaral-price-wrapper">
                <h3>Umumiy hisob</h3>
                <h3 className="genaral-price-wrapper__item">
                  {totalPrice.toFixed(3)} UZS
                </h3>
              </div>
              <button
                className="add-to-cart-button cat-order__btn"
                onClick={clearCart}
              >
                Hoziroq xarid qilish
              </button>
              <NavLink to="/" className="cat-order__btn">
                Xaridni davom ettirish
              </NavLink>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Shopping;
