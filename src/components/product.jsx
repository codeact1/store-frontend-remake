import { useState, useContext } from "react";
import "../components/product.css";
import QuantityPicker from "./quantitypicker";
import StoreContext from "../state/storeContext";

const Product = (props) => {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useContext(StoreContext).addToCart;

  const handleQuantityChange = (qty) => {
    console.log("QuantityPicker changed", qty);
    setQuantity(qty);
  };

  const getTotal = () => {
    const total = quantity * props.data.price;
    return total.toFixed("2");
  };

  const handleAdd = () => {
    let pForCart = { ...props.data, quantity: quantity };
    addToCart(pForCart); //call the context function
  };

  return (
    <div className="product">
      <img
        className="images"
        src={"/images/" + props.data.image}
        width="193"
        height="130"
        alt=""
      />

      <h5>{props.data.title}</h5>
      <div className="prices">
        <label className="total">Total:${getTotal()}</label>
        <label className="price">Price:${props.data.price}</label>
      </div>

      <div className="controls">
        <QuantityPicker onChange={handleQuantityChange} />

        <button onClick={handleAdd} className="btn btn-sm btn-success">
          Add
        </button>
      </div>
    </div>
  );
};
export default Product;
