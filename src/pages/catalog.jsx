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
    loadData();
  }, []);

  const loadData = async () => {
    let service = new Dataservice();
    let result = await service.getCatalog();
    setProducts(result);
  };

  return (
    <div className="catalog">
      <h1>Next Level Equipment for Next Level Workout</h1>
      <div className="list-container">
        {products.map((prod, index) => (
          <Product key={index} data={prod} />
        ))}
      </div>
      <Wishlist />
    </div>
  );
};

export default Catalog;
