import "./CartModal.css";
import { Close } from "@mui/icons-material";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
const CartModal = ({ selectedCat, closeModal }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  const totalPrice = selectedCat?.price * quantity;

  return (
    <div className="modal__container container">
      <div className="modal">
        <div className="close-modal" onClick={closeModal}>
          <Close />
        </div>
        <img
          className="modal__image"
          src={selectedCat?.image}
          alt="selected cat image"
          width={350}
          height={400}
        />
        <div className="modal__content">
          <div className="modal__item">
            <p className="modal__key">Mushukni ismi:</p>
            <h3 className="modal__value">{selectedCat?.name}</h3>
          </div>
          <div className="modal__item">
            <p className="modal__key">Mushukni zoti:</p>
            <h3 className="modal__value">{selectedCat?.breed}</h3>
          </div>
          <div className="modal__item">
            <p className="modal__key modal__key--description">Mushuk haqida:</p>
            <p className="modal__value">{selectedCat?.description}</p>
          </div>
          <div className="modal__item">
            <p className="modal__key">Umumiy narxi:</p>
            <h3 className="modal__value">{totalPrice.toFixed(3)} UZS</h3>
          </div>
          <div className="modal__item">
            <p className="modal__key modal__key--description">Miqdori:</p>
            <button className="modal__quantity">
              <span className="modal__quantity--wrapper">
                <div
                  onClick={() => {
                    if (quantity > 1) setQuantity(quantity - 1);
                  }}
                  className="modal__calculation-item"
                >
                  <Minus className="modal__calculation-icon" />
                </div>
                {quantity}
                <div
                  onClick={() => {
                    setQuantity(quantity + 1);
                  }}
                  className="modal__calculation-item"
                >
                  <Plus className="modal__calculation-icon" />
                </div>
              </span>
            </button>
          </div>
          <div className="modal__item">
            <button
              className="add-to-cart-button add-to-cart-button--modal"
              onClick={() => {
                addToCart({ ...selectedCat, qty: quantity });
                closeModal();
              }}
            >
              Savatga qo'shish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
