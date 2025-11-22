import Favourites from "../../components/Favourites/Favourites";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/Products";
import "./Home.css";

const Home = () => {

  return (
    <div className="site-home">
      <Header />
      <Hero />
      <Favourites />
      <Products />
    </div>
  );
};

export default Home;
