//import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Catalog from "./pages/catalog";
import Home from "./pages/home";
import Wishlist from "./pages/wishlist";
import About from "./pages/about";
import Cart from "./pages/cart";
import Admin from "./pages/admin";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "font-awesome/css/font-awesome.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalContext from "./state/globalContext";

function App() {
  return (
    <GlobalContext>
      <BrowserRouter>
        <div className="App">
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about" element={<About />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </GlobalContext>
  );
}

export default App;
