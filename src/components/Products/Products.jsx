import "./Products.css";
import { Heart, Star } from "lucide-react";
import { useEffect, useState } from "react";

const Products = () => {
  const [favorites, setFavorites] = useState(() => {
    const savedCat = localStorage.getItem("favorites");
    return savedCat ? JSON.parse(savedCat) : [];
  });
  const [cart, setCart] = useState([]);

  const cats = [
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
      image:
        "https://mypawland.com/wp-content/uploads/2025/04/5.png",
      description: "Arab dunyosidan kelgan, chiroyli naqshli mo‘yna.",
      rating: 5,
    },
    {
      id: 9,
      name: "Bella",
      breed: "Ragamuffin",
      age: "7 hafta",
      price: 710,
      image:
        "https://articles.hepper.com/wp-content/uploads/2021/12/ragamuffin-cat-in-the-studio_Tatiana-Makotra-Shutterstock.jpg",
      description: "Ragdollga o‘xshash, muloyim va uyga mos.",
      rating: 5,
    },
  ];

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((catId) => catId !== id) : [...prev, id]
    );
  };

  const addToCart = (id) => {
    if (!cart.includes(id)) {
      setCart((prev) => [...prev, id]);
    }
  };

  return (
    <div className="products-section-main" id="products">
      <div className="products-section">
        <div className="container">
          <h2 className="products-title">Sotuvdagi Mushuklar</h2>
          <p className="products-description">
            Har bir mushugimiz sog‘lom, emlangan va oilangizga qo‘shilish uchun
            tayyor.
          </p>
        </div>
      </div>

      <div className="container products-container">
        <div className="catalog">
          {cats.map((cat) => (
            <div key={cat.id} className="card">
              <div className="card-image-container">
                <img src={cat.image} alt={cat.name} className="card-image" />
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
                    onClick={() => addToCart(cat.id)}
                    disabled={cart.includes(cat.id)}
                    className="add-to-cart-button"
                  >
                    {cart.includes(cat.id) ? "Savatda" : "Savatga qo‘shish"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="products-footer-btn-wrapper">
          <button className="add-to-cart-button products-footer-btn">Ko‘proq</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
