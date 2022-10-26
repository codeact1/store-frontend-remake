import "./productsInCart.css";

const ProductsInCart = (props) => {
  const getTotal = () => {
    return props.data.price * props.data.quantity;
  };

  return (
    <div className="products-in">
      <img className="cart-img" src={"/images/" + props.data.image} alt="" />

      <div className="product-info">
        <h5>{props.data.title}</h5>
        <h3>{props.data.category}</h3>
      </div>

      <label>{props.data.price}</label>
      <label>{props.data.quantity}</label>
      <label>{getTotal()}</label>

      <button className="btn btn-danger">Delete</button>
    </div>
  );
};

export default ProductsInCart;
