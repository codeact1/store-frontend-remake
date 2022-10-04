import '../components/product.css'
import QuantityPicker from './quantitypicker';


const Product = () => {
    return(
        <div className="product">

        <img src="https://i.picsum.photos/id/1004/200/300.jpg?hmac=U8xLjv1wDsnhRH90oqnEvk2hvspq7UPzpU8Z9TtIxZM" alt="" />

            <h5>Title of the Product</h5>
            <label>Total</label>
            <label>Total</label>
            <QuantityPicker />
        </div>
    );

}
export default Product;