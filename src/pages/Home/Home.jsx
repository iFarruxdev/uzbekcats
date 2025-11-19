import Favourites from "../../components/Favourites/Favourites";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import "./Home.css";

const Home = () => {

  return (
    <div className="site-home">
      <Header />
      <Hero />
      <Favourites />
    </div>
  );
};

export default Home;
