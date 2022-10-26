import StoreContext from "./storeContext";
import { useState } from "react";

const GlobalContext = (props) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({ id: 1, name: "John" });

  const addToCart = (prod) => {
    let found = false;
    let newCart = [...cart];
    for (let i = 0; i < newCart.length; i++) {
      let item = newCart[i];
      if (item._id === prod._id) {
        //found it
        item.quantity += prod.quantity;
        found = true;
      }
    }
    if (!found) {
      newCart.push(prod);
    }

    setCart(newCart);
  };

  const removeProd = () => {
    console.log("removing product");
  };

  const clearCart = () => {
    console.log("clearing cart");
  };
  return (
    <StoreContext.Provider
      value={{
        cart: cart,
        user: user,
        addToCart: addToCart,
        removeFromCart: removeProd,
        clearCart: clearCart,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default GlobalContext;
