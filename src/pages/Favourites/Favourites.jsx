import { useState, useContext } from "react";
import Header from "../../components/Header/Header";
import { Heart, Star } from "lucide-react";
import "./Favourites.css";
import { FavoritesContext } from "../../components/FavoritesContext/FavoritesContext";
import { CartContext } from "../../components/Context/CartContext";
import CartModal from "../../components/CartModal/CartModal";
import Footer from "../../components/Footer/Footer";

const Favourites = () => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const [selectedCat, setSelectedCat] = useState(null);

  const { cart } = useContext(CartContext);

  const allCats = [
    {
      id: 1,
      name: "Muizza",
      breed: "Scottish Fold",
      age: "8 hafta",
      price: 620,
      image:
        "https://cattime.com/wp-content/uploads/sites/14/2024/12/GettyImages-468382096-1-e1734109062300.jpg",
      description: "Quloqlari bukilgan, juda yoqimtoy, juda mashhur.",
      rating: 5,
    },
    {
      id: 2,
      name: "Bars",
      breed: "Bengal Mushugi",
      age: "10 hafta",
      price: 990,
      image:
        "https://www.trupanion.com/images/trupanionwebsitelibraries/bg/bengal-cat.jpg?sfvrsn=fc36dda4_5",
      description: "Yo‘lbarsga o‘xshagan naqshli mo‘yna. Juda chiroyli.",
      rating: 5,
    },
    {
      id: 3,
      name: "Bella",
      breed: "Ragdoll Mushugi",
      age: "12 hafta",
      price: 760,
      image:
        "https://images.ctfassets.net/r208a72kad0m/5MwtZRwJ8MhL9P2rIIuTV/4087d31c86a865a2e020ad148fdf6bd3/Copy_of_Untitled_Design.png",
      description: "Muloyim va quchoqni yaxshi ko‘radigan mushuk",
      rating: 5,
    },
    {
      id: 4,
      name: "Nora",
      breed: "Balinese Mushugi",
      age: "9 hafta",
      price: 560,
      image:
        "https://www.zooplus.co.uk/magazine/wp-content/uploads/2021/10/Balinese-cat.webp",
      description: "Siamese oilasidan, uzun mo‘ynali va muloyim.",
      rating: 5,
    },
    {
      id: 5,
      name: "Simba",
      breed: "Fors Mushugi",
      age: "4 hafta",
      price: 780,
      image:
        "https://media.os.fressnapf.com/cms/2020/04/Ratgeber-Rassenportrait-Perser-weiss_1200x527.jpg?t=seoimg_703",
      description: "Uzun mo‘ynali, aristokrat ko‘rinish, sokin.",
      rating: 5,
    },
    {
      id: 6,
      name: "Maya",
      breed: "Somali Mushugi",
      age: "11 hafta",
      price: 460,
      image:
        "https://www.thesprucepets.com/thmb/D3tqi0xMC2xkaIrKYXO0xPGNoGo=/1419x0/filters:no_upscale():strip_icc()/GettyImages-514937248-363cfffc62414aa0aee6afb7648e9027.jpg",
      description: "Abyssinianning uzun mo‘ynali varianti.",
      rating: 5,
    },
    {
      id: 7,
      name: "Muizza",
      breed: "Munchkin Mushugi",
      age: "5 hafta",
      price: 599,
      image:
        "https://www.petrebels.com/en/wp-content/uploads/sites/3/2023/03/bobbi-wu-yJ1fX6PAXtU-unsplash-scaled.jpg",
      description: "Qisqa oyoqli, juda yoqimli va quvnoq.",
      rating: 5,
    },
    {
      id: 8,
      name: "Muoni",
      breed: "Arabian Mau",
      age: "4 hafta",
      price: 999,
      image: "https://mypawland.com/wp-content/uploads/2025/04/5.png",
      description: "Arab dunyosidan kelgan, chiroyli naqshli mo‘yna.",
      rating: 5,
    },
    {
      id: 9,
      name: "Naruki",
      breed: "Ragamuffin",
      age: "7 hafta",
      price: 710,
      image:
        "https://articles.hepper.com/wp-content/uploads/2021/12/ragamuffin-cat-in-the-studio_Tatiana-Makotra-Shutterstock.jpg",
      description: "Ragdollga o‘xshash, muloyim va uyga mos.",
      rating: 5,
    },
    {
      id: 10,
      name: "Alina",
      breed: "Ragamuffin",
      age: "8 hafta",
      price: 540,
      image:
        "https://scrumbles.co.uk/cdn/shop/articles/ragamuffin-cat-breed-guide-483157.jpg?v=1748195248",
      description: "Uyga mos, muloyim, sodiq, quchoqni yaxshi ko‘radi.",
      rating: 5,
    },
    {
      id: 11,
      name: "Sofia",
      breed: "Siamese",
      age: "4 hafta",
      price: 630,
      image:
        "https://assets.elanco.com/8e0bf1c2-1ae4-001f-9257-f2be3c683fb1/fca42f04-2474-4302-a238-990c8aebfe8c/Siamese_cat_1110x740.jpg",
      description: "Ochiq ko‘ngil, aqlli va egasiga sodiq.",
      rating: 5,
    },
    {
      id: 12,
      name: "Bandila",
      breed: "Abyssinian",
      age: "6 hafta",
      price: 1910,
      image:
        "https://petinsurance.com.au/wp-content/uploads/2016/07/Abyssinian_961x558-1.jpg",
      description: "Aqlli, o‘yinchoqni yaxshi ko‘radi.",
      rating: 5,
    },
    {
      id: 13,
      name: "Leo",
      breed: "Savannah",
      age: "5 hafta",
      price: 910,
      image:
        "https://cdn.sanity.io/images/d075r9p6/production/5ce1654a6b6e45e4b0e79b395bbf794be6dd599f-640x425.png?w=1200&h=630",
      description: "Yo‘lbarsga o‘xshash, baland va chaqqon mushuk.",
      rating: 5,
    },
    {
      id: 14,
      name: "Luna",
      breed: "Manx",
      age: "7 hafta",
      price: 640,
      image:
        "https://media.istockphoto.com/id/172202019/photo/manx-queen.jpg?s=612x612&w=0&k=20&c=lxP30VOMi7lK5sUkFz6lS0oxr5LbTVL8ag_rviwyZ0M=",
      description: "Dumi qisqa, kuchli va muloyim.",
      rating: 5,
    },
    {
      id: 15,
      name: "Coco",
      breed: "Singapura",
      age: "6 hafta",
      price: 800,
      image:
        "https://amarpet-space.sgp1.digitaloceanspaces.com/production/MtXVBZP20IgK3SaA3ahUGa2ZNnkatetmHoXsvnuV.jpg",
      description: "Ragdollga o‘xshash, muloyim va uyga mos.",
      rating: 5,
    },
    {
      id: 16,
      name: "Domino",
      breed: "Tuxedo",
      age: "9 hafta",
      price: 499,
      image:
        "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2dldHR5aW1hZ2VzLTEzMjk4NDczODIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0=",
      description: "Qora va oq rangdagi klassik tuxedo naqshli.",
      rating: 5,
    },
    {
      id: 17,
      name: "Jet",
      breed: "Bombay",
      age: "6 hafta",
      price: 370,
      image:
        "https://www.purina.com/sites/default/files/styles/social_share/public/2025-08/bombay_cat_4.jpg?h=82f92a78&itok=a1pa9PE-",
      description: "Butunlay qora mo‘yna, sokin va aqlli.",
      rating: 5,
    },
    {
      id: 18,
      name: "Tiger",
      breed: "Chausie",
      age: "5 hafta",
      price: 710,
      image:
        "https://cdn.shopify.com/s/files/1/0765/3946/1913/files/Chausie-laying-position.webp?v=1743479856",
      description: "Yo‘lbarsga o‘xshash naqshli, katta va chaqqon.",
      rating: 5,
    },
  ];

  const favoriteCats = allCats.filter((cat) => favorites.includes(cat.id));

  return (
    <div className="site-favorites">
      {selectedCat && (
        <CartModal
          selectedCat={selectedCat}
          closeModal={() => setSelectedCat(null)}
        />
      )}

      <Header />

      <div className="site-favorites__container container">
        <div className="empty-cats">
          <h2>Sevimli Mushuklar</h2>
          {favoriteCats.length <= 0 && <p>Hozircha mavjud emas !</p>}
        </div>

        <div className="catalog site-favorites__catalog">
          {favoriteCats.map((cat) => (
            <div key={cat.id} className="card">
              <div className="card-image-container">
                <img src={cat.image} className="card-image" />

                <button
                  onClick={() => toggleFavorite(cat.id)}
                  className={`favorite-button ${
                    favorites.includes(cat.id) ? "active" : ""
                  }`}
                >
                  <Heart
                    className="favorite-icon"
                    fill={favorites.includes(cat.id) ? "currentColor" : "none"}
                  />
                </button>

                <div className="rating-container">
                  {[...Array(cat.rating)].map((_, i) => (
                    <Star key={i} className="star" fill="currentColor" />
                  ))}
                </div>
              </div>

              <div className="card-content">
                <div className="card-header">
                  <div>
                    <h3 className="card-title">{cat.name}</h3>
                    <p className="card-breed">{cat.breed}</p>
                  </div>
                  <span className="age-badge">{cat.age}</span>
                </div>

                <p className="card-description">{cat.description}</p>

                <div className="card-footer">
                  <div className="price-section">
                    <span className="price-label">Narxi</span>
                    <span className="price">{cat.price.toFixed(3)} UZS</span>
                  </div>

                  <button
                    onClick={() => setSelectedCat(cat)}
                    disabled={cart.some((item) => item.id === cat.id)}
                    className="add-to-cart-button"
                  >
                    {cart.some((item) => item.id === cat.id)
                      ? "Savatda"
                      : "Savatga qo‘shish"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Favourites;
