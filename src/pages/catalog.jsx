import "./catalog.css";
import "../components/quantitypicker.jsx";
import Product from "../components/product";
import { useEffect, useState } from "react";
import Dataservice from "../services/dataService";
import Wishlist from "../components/wishlist";

const Catalog = () => {
  const [products, setProducts] = useState([]);

  //use effect
  // to do something when the component its loaded
  useEffect(() => {
    let service = new Dataservice();
    let result = service.getCatalog();
    setProducts(result);
  }, []);

  return (
    <div className="catalog">
      <h1>The Best Equipment for the Best Workout Ever</h1>
      <div className="list-container">
        {products.map((prod) => (
          <Product key={prod.id} data={prod} />
        ))}
      </div>
      <Wishlist />
    </div>
  );
};

export default Catalog;
