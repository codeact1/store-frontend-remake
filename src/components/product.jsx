import '../components/product.css'
import QuantityPicker from './quantitypicker';


const Product = () => {
    return(
        <div className="product">
            <h1>New Products</h1>

            <QuantityPicker />
        </div>
    );

}
export default Product;