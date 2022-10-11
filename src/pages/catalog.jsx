import "./catalog.css";
import "../components/quantitypicker.jsx";
import Product from "../components/product";
import { useEffect, useState } from "react";
import Dataservice from "../services/dataService";

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
      
      <div className="list-container">
        {products.map(prod  => 
          <Product key={prod.id} data={prod} />
        )}
      </div>
    </div>
  );

}

export default Catalog;
