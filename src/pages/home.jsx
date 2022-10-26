import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <img className="home-pageimg" src="/images/pexels.jpg" alt="" />
      <div className="center"> Elevate your Workout</div>

      <Link className="btn btn-outline-success">See Our Catalog</Link>
    </div>
  );
};

export default Home;
