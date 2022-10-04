import './catalog.css';
import '../components/quantitypicker.jsx';
import Product from '../components/product';

function Catalog(){
    return(
        <div className="catalog">
            <h1>Check our amazing catalog</h1>
         <div className="list-container">   
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
            </div>
        </div>
    );
}

export default Catalog;