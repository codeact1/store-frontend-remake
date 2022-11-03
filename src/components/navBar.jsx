import "./navBar.css";
import StoreContext from "../state/storeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const user = useContext(StoreContext).user;
  const cart = useContext(StoreContext).cart;

  const getCartCount = () => {
    let count = 0;
    for (let i = 0; i < cart.length; i++) {
      count += cart[i].quantity;
    }

    return count;
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/#">
          Fitness Equipment Store
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalog">
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/wishlist">
                Wish List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <Link className="btn btn-outline-light" to="/cart">
              <span className="badge text-bg-danger">{getCartCount()}</span>
              View
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </Link>

            <label>{user.name}</label>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
