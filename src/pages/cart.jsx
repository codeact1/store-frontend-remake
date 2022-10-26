import "./cart.css";
import { useContext } from "react";
import StoreContext from "../state/storeContext";
import ProductsInCart from "./../components/productsInCart";

const Cart = () => {
  const cart = useContext(StoreContext).cart;
  const getCartCount = () => {
    let count = 0;
    for (let i = 0; i < cart.length; i++) {
      count += cart[i].quantity;
    }

    return count;
  };

  const getTotal = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price * cart[i].quantity;
    }
    return "$" + total.toFixed("2");
  };

  return (
    <div className="cart">
      <h1 className="header">Next step to next level purchase</h1>
      <h5 className="header">
        We have {getCartCount()} products waiting for you
      </h5>
      <div className="inner-cart">
        <div className="products">
          <ul>
            {cart.map((prod) => (
              <ProductsInCart key={prod._id} data={prod} />
            ))}
          </ul>
        </div>

        <div className="total">
          <h3>Total</h3>
          <h5>{getTotal()}</h5>
          <hr />
          <button className="btn btn-primary">Pay Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
