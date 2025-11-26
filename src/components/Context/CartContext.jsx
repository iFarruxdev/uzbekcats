import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
    alert("Xaridingiz uchun rahmat ✅")
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    const exists = cart.find((x) => x.id === item.id);

    if (exists) {
      const updated = cart.map((x) =>
        x.id === item.id ? { ...x, qty: x.qty + item.qty } : x
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...item }]);
    }
  };

  const increaseQty = (id) => {
    const updated = cart.map((x) =>
      x.id === id ? { ...x, qty: x.qty + 1 } : x
    );
    setCart(updated);
  };

  const decreaseQty = (id) => {
    const updated = cart.map((x) =>
      x.id === id && x.qty > 1 ? { ...x, qty: x.qty - 1 } : x
    );
    setCart(updated);
  };

  const removeFromCart = (id) => {
    const updated = cart.filter((x) => x.id !== id);
    setCart(updated);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
