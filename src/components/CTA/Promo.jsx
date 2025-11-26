import './Promo.css'

const Promo = () => {
  return (
    <div className='site-promo'>
      <div className="site-promo__container container">
        <section className="site-promo__cta site-cta">
          {/* <h1>Site Promo Section Title</h1> */}
          <img loading='lazy' className='site-cta__image' src="cta-image-cat.jpg" alt="cat image for promo section" />
          <div className="site-cta__content">
            <h2 className='site-cta__title'>
              UzbekCats – Sizning yangi mushuk do‘stingiz shu yerda!
            </h2>
            <p className='site-cta__description'>Har bir mushugimiz sog‘lom, toza va vaksinatsiyalangan bo‘lib, yangi oilasini kutmoqda. UzbekCats sizga uyga quvonch, mehr va do‘stlik olib kiradigan chiroyli va yoqimli mushuklarni taqdim etadi. Bizning mushuklarimiz do‘stona, oson moslashadigan va uyingizga tezda o‘rganadigan xususiyatlarga ega. Siz faqat eng yaxshi sifat va xavfsizlikni tanlaysiz – chunki har bir mushugimiz sizga yangi do‘st bo‘lishga tayyor !</p>
            <h3 className='site-cta__heading'>Nima uchun UzbekCats</h3>
            <ul className='site-cta__list'>
              <li className='site-cta__item'>Sog‘lom va vaksinatsiyalangan mushuklar</li>
              <li className='site-cta__item'>Tez yetkazib berish va kafolat</li>
              <li className='site-cta__item'>Do‘stona va yoqimli mushuklar</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Promo