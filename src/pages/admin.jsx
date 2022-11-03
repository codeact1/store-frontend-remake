import { useState } from "react";
import "./admin.css";
import Dataservice from "../services/dataService";
import { useEffect } from "react";

const Admin = () => {
  const [coupon, setCoupon] = useState({});
  const [allCoupons, setAllCoupons] = useState([]);

  const [product, setProduct] = useState({});
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    loadCoupons();
    loadProducts();
  }, []);

  const loadProducts = async () => {
    let service = new Dataservice();
    let list = await service.getCatalog();
    setAllProducts(list);
  };

  const loadCoupons = async () => {
    let service = new Dataservice();
    let list = await service.getCoupons();
    setAllCoupons(list);
  };

  const handleProductChange = (evt) => {
    const text = evt.target.value;
    const name = evt.target.name;

    let copy = { ...product };
    copy[name] = text;
    setProduct(copy);
  };

  const saveProduct = async () => {
    let copy = { ...product };
    copy.price = parseFloat(copy.price);

    //save the product on server
    let service = new Dataservice();
    let prod = await service.saveProduct(copy);
    console.log(prod);

    let productList = [...allProducts];
    productList.push(copy);
    setAllProducts(productList);
  };

  const handleCouponChange = (e) => {
    const text = e.target.value;
    const name = e.target.name;

    let copy = { ...coupon };
    copy[name] = text;
    setCoupon(copy);
  };

  const saveCoupon = async () => {
    // fix discount to be a number
    let copy = { ...coupon };
    copy.discount = parseFloat(copy.discount);

    //send to server
    let service = new Dataservice();
    let c = await service.saveCoupon(copy);
    console.log(c);

    // add to list

    let couponList = [...allCoupons];
    couponList.push(copy);
    setAllCoupons(couponList);

    console.log(allCoupons);
  };

  return (
    <div className="admin">
      <h1>Admin Page</h1>
      <div className="form-group">
        <div className="products">
          <h3>Products</h3>
          <div>
            <label>Title:</label>
            <input name="title" type="text" onChange={handleProductChange} />
          </div>
          <div>
            <label>Price:</label>
            <input name="price" type="text" onChange={handleProductChange} />
          </div>
          <div>
            <label>Category:</label>
            <input name="category" type="text" onChange={handleProductChange} />
          </div>
          <div>
            <button className="btn btn-primary" onClick={saveProduct}>
              Add
            </button>
          </div>
          <div>
            <ul>
              {allProducts.map((p) => (
                <li key={p.title}>
                  {p.title} - {p.category} - ${p.price}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="discounts">
          <h3>Discounts</h3>
          <div>
            <label>Code:</label>
            <input name="code" onChange={handleCouponChange} type="text" />
          </div>
          <div>
            <label>Discount:</label>
            <input name="discount" onChange={handleCouponChange} type="text" />
            <div>
              <button className="btn btn-primary" onClick={saveCoupon}>
                Save
              </button>
            </div>
          </div>
          <ul>
            {allCoupons.map((c, index) => (
              <li key={index}>
                {c.code} - {c.discount}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admin;
