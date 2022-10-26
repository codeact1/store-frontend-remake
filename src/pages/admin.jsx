import { useState } from "react";
import "./admin.css";

const Admin = () => {
  const [coupon, setCoupon] = useState({});
  const [allCoupons, setAllCoupons] = useState([]);

  const [product, setProduct] = useState({});
  const [allProducts, setAllProducts] = useState([]);

  const handleProductChange = (evt) => {
    const text = evt.target.value;
    const name = evt.target.name;

    let copy = { ...product };
    copy[name] = text;
    setProduct(copy);
  };

  const saveProduct = () => {
    let copy = { ...product };
    copy.price = parseFloat(copy.price);

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

  const saveCoupon = () => {
    // fix discount to be a number
    let copy = { ...coupon };
    copy.discount = parseFloat(copy.discount);

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
            {allCoupons.map((c) => (
              <li key={c.code}>
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
