import "../components/product.css";
import QuantityPicker from "./quantitypicker";

const Product = (props) => {
  return (
    <div className="product">
      <img className="images"
        src={"/images/" + props.data.image} width="193" height="130" alt=""
      />

      <h5>{props.data.title}</h5>
      <label className="total">Total</label>
      <label className="price">Price</label>
      <QuantityPicker />
    </div>
  );
};
export default Product;
