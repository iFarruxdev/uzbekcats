import Promo from "../../components/CTA/Promo";
import Favourites from "../../components/Favourites/Favourites";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/Products";
import "./Home.css";

const Home = () => {

  return (
    <div id="site-home" className="site-home">
      <Header />
      <Hero />
      <Favourites />
      <Products />
      <Promo />
      <Footer />
    </div>
  );
};

export default Home;
