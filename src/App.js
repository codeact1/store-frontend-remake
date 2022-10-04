import logo from './logo.svg';
import './App.css';
import NavBar from "./components/navBar";
import Footer from "./components/footer"
import Catalog from "./pages/catalog";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div>
      <NavBar />
      <h1>Hello React!!</h1>

      <Catalog />
      

      <Footer />
    </div>
    

  );
}

export default App;