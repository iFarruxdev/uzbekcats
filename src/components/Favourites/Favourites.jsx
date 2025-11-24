import "./Favourites.css"
export default function Favourites() {
  const cats = [
    {
      id: 1,
      name: 'Grumpy Mushuk',
      description: 'Doimiy jahlroq ifodasi bilan mashhur bo‘lgan internet yulduzi. Uning noodatiy qosh uygan chehrasi millionlab odamlarning qalbini zabt etgan.',
      image: 'https://media.wired.com/photos/5cdefc28b2569892c06b2ae4/3:2/w_2560%2Cc_limit/Culture-Grumpy-Cat-487386121-2.jpg',
    },
    {
      id: 2,
      name: 'Maru Mushuk',
      description: 'Yaponiyalik Scottish Fold mushugi, kichkina qutilarga sig‘ishga urinishi bilan mashhur bo‘lgan. Uning videolari butun dunyo bo‘ylab millionlab ko‘rishlarga ega.',
      image: 'https://i.pinimg.com/564x/27/2a/97/272a976264a0d0ce19220b2fc8883315.jpg',
    },
    {
      id: 3,
      name: 'Smoothie Mushuk',
      description: 'Internetning eng fotogenik mushuki sifatida tanilgan Smoothie — o‘zining nafis qiyofasi, sokin tabiatı va kamera oldida tug‘ma modeldek tutishi bilan millionlab muxlislarni rom etgan.',
      image: 'https://www.usmagazine.com/wp-content/uploads/2018/06/Smoothie-the-Cat-Instagram-zoom.jpg?crop=0px%2C0px%2C1080px%2C611px&resize=1200%2C675&quality=86&strip=all',
    },
    {
      id: 4,
      name: 'Hosicocat Mushuk',
      description: 'Katta dumaloq ko‘zlari va yumaloq yuz tuzilishi bilan Hosico ko‘pincha ‘real hayotdagi Puss in Boots’ deb ataladi.',
      image: 'https://static.tildacdn.com/tild3362-3766-4134-b863-666339646438/full_80FNVN6E.jpg',
    },
    {
      id: 5,
      name: 'Maple Mushuk',
      description: 'Sokin xarakteri, yumshoq junlari va juda tinch tabiatı bor mushuk. Uning sekin qadamlarida, muloyim qarashida.',
      image: 'https://images.squarespace-cdn.com/content/v1/5a5d10ae2aeba5215249a42b/1703580977271-UW07S0SLBQV2I37LNY8J/image-asset.jpeg',
    },
    {
      id: 6,
      name: 'Turkish Van Mushuk',
      description: "Turkish Van — go‘zal va noyob mushuk zotlaridan biri. Ularning eng mashhur xususiyati — oq junlari va rangli ko'zlari va dumining uchi.",
      image: 'https://d2zp5xs5cp8zlg.cloudfront.net/image-88409-800.jpg',
    },
  ];

  return (
    <section className="famous-cats-section">
      <div className="famous-cats-container container">
        <div className="famous-cats-header">
          <h2 className="famous-cats-title">Eng Mashxur Mushuklar</h2>
          <p className="famous-cats-subtitle">Dunyo bo'ylab qalblarni zabt etgan eng sevimli mushuklar ro'yxati</p>
        </div>

        <div className="famous-cats-grid">
          {cats.map((cat) => (
            <div key={cat.id} className="famous-cat-card">
              <div className="famous-cat-image-wrapper">
                <img src={cat.image} alt={cat.name} className="famous-cat-image" />
              </div>
              <div className="famous-cat-content">
                <h3 className="famous-cat-name">{cat.name}</h3>
                <p className="famous-cat-description">{cat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
