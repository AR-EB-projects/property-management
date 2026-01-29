"use client";

export default function Home() {
  return (
    <>
      <div className="main-content-wrapper">
        <div className="banner-section">
          <div className="container h-100">
            <div className="row align-items-center justify-content-center h-100">
              <div className="col-12 col-md-10 col-lg-6 col-xl-6 h-100">
                <div className="banner-section-wrapper">
                  <h1>
                    <span>Притеснявате ли се</span> от <span>управлението</span> на сградата си
                    и нуждата от домоуправител?
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* banner overlay */}
        <div className="banner-overlay">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-12 col-md-10 col-lg-10 col-xl-10">
                <div className="banner-overlay-inner">
                  <div className="carosel-root">
                    <div className="carosel product">
                      {/* item 1 */}
                      <div className="carosel-item">
                        <div className="carosel-item-inner-wrapper">
                          <div className="cii-left">
                            <div className="cii-left-info">
                              <h3>Сграда "Витоша", София</h3>
                              <p>Сграда с 12 апартамента, София</p>
                            </div>
                            <div className="cii-right-info">
                              <div className="cii-right-info-inner">
                                <p>
                                  <span className="material-icons">
                                    square_foot
                                  </span>{" "}
                                  12 апартамента
                                </p>
                                <p>
                                  <span className="material-icons">bed</span>2
                                  Етажи
                                </p>
                              </div>
                              <div className="cii-right-info-inner">
                                <p>
                                  <span className="material-icons">bathtub</span>2
                                  Входове
                                </p>
                                <p>
                                  <span className="material-icons">apartment</span>
                                  4 етажа
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="cii-right">
                            <a className="more-detail-btn" href="#">
                              Повече детайли
                            </a>
                          </div>
                          <div className="cii-overlay-info">
                            <p>Етажна собственост</p>
                          </div>
                        </div>
                      </div>
                      {/* item 2 */}
                      <div className="carosel-item">
                        <div className="carosel-item-inner-wrapper">
                          <div className="cii-left">
                            <div className="cii-left-info">
                              <h3>Сграда "Родопи", Пловдив</h3>
                              <p>Сграда с 8 апартамента, Пловдив</p>
                            </div>
                            <div className="cii-right-info">
                              <div className="cii-right-info-inner">
                                <p>
                                  <span className="material-icons">
                                    square_foot
                                  </span>{" "}
                                  8 апартамента
                                </p>
                                <p>
                                  <span className="material-icons">bed</span>2
                                  Етажи
                                </p>
                              </div>
                              <div className="cii-right-info-inner">
                                <p>
                                  <span className="material-icons">bathtub</span>2
                                  Входове
                                </p>
                                <p>
                                  <span className="material-icons">apartment</span>
                                  4 етажа
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="cii-right">
                            <a className="more-detail-btn" href="#">
                              Повече детайли
                            </a>
                          </div>
                          <div className="cii-overlay-info">
                            <p>Етажна собственост</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* services */}
        <div className="section servicesSlide pb-0">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                <div className="section-second-heading">
                  <h3>Започнете с разглеждането на нашите услуги</h3>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-12 col-xl-12">
              <div className="services-slider-wrapper">
                <div className="carosel-root">
                  <div className="carosel services">
                    {/* item 1 */}
                    <div className="carosel-item">
                      <a href="#" className="servicesSlide-inner">
                        <img
                          loading="lazy"
                          className="img-fluid"
                          src="/images/cashier.jpg"
                          alt="img"
                        />
                                  <h3>Касови услуги</h3>
                      </a>
                    </div>
                    {/* item 2 */}
                    <div className="carosel-item">
                      <a href="#" className="servicesSlide-inner">
                        <img
                          loading="lazy"
                          className="img-fluid"
                          src="/images/tenant-management.webp"
                          alt="img"
                        />
                                  <h3>Професионален управител</h3>
                      </a>
                    </div>
                    {/* item 3 */}
                    <div className="carosel-item">
                      <a href="#" className="servicesSlide-inner">
                        <img
                          loading="lazy"
                          className="img-fluid"
                          src="/images/business-plan.webp"
                          alt="img"
                        />
                                  <h3>Юридическа консултация</h3>
                      </a>
                    </div>
                    {/* item 4 */}
                    <div className="carosel-item">
                      <a href="#" className="servicesSlide-inner">
                        <img
                          loading="lazy"
                          className="img-fluid"
                          src="/images/clean.jpg"
                          alt="img"
                        />
                                  <h3>Почистване на входа</h3>
                      </a>
                    </div>
                    {/* item 5 */}
                    <div className="carosel-item">
                      <a href="#" className="servicesSlide-inner">
                        <img
                          loading="lazy"
                          className="img-fluid"
                          src="/images/apartment-maintanence.webp"
                          alt="img"
                        />
                                  <h3>Техническа поддръжка</h3>
                      </a>
                    </div>
                    {/* item 6 */}
                    <div className="carosel-item">
                      <a href="#" className="servicesSlide-inner">
                        <img
                          loading="lazy"
                          className="img-fluid"
                          src="/images/entrance.png"
                          alt="img"
                        />
                                  <h3>Поддръжка на около входно пространство</h3>
                      </a>
                    </div>
                    {/* item 7 */}
                    <div className="carosel-item">
                      <a href="#" className="servicesSlide-inner">
                        <img
                          loading="lazy"
                          className="img-fluid"
                          src="/images/plot-monitoring.jpg"
                          alt="img"
                        />
                                  <h3>Пълно управление на сградата</h3>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* why choose */}
        <div className="section whyChoose">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-12 col-md-11 col-lg-11 col-xl-11">
                <div className="whyChoose-inner-container">
                  <div className="row">
                    <div className="col-12 col-md-12 col-lg-12">
                      <div className="whyChoose-heading-wrapper">
                        <div className="whyChoose-heading-icon">
                          <div className="whyChoose-icon">
                            <img
                              loading="lazy"
                              className="img-fluid"
                              src="/images/ask.png"
                              alt="img"
                            />
                          </div>
                          <div className="whyChoose-info-heading">
                            <h3>Защо да изберете ДомоМениджър</h3>
                          </div>
                        </div>
                        <div className="whyChoose-viewall">
                          <a className="header-request-btn" href="why-choose">
                            Вижте всички прозрения
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* contents */}
                  <div className="row mt-4">
                    <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                      <div className="whychoose-slider-wrapper">
                        <div className="carosel-root">
                          <div className="carosel whychoose">
                            {/* item 1 */}
                            <div className="carosel-item">
                              <div className="whychoose-card-wrapper">
                                <div className="whychoose-card-icon">
                                  <img
                                    loading="lazy"
                                    className="img-fluid"
                                    src="/images/renter.png"
                                    alt="img"
                                  />
                                </div>
                                <div className="whychoose-card-body">
                                  <h3>Професионален домоуправител</h3>
                                  <p>
                                    Нашият опитен домоуправител ще се погрижи за всичко - от събиране на такси до организиране на ремонти.
                                  </p>
                                </div>
                              </div>
                            </div>
                            {/* item 2 */}
                            <div className="carosel-item">
                              <div className="whychoose-card-wrapper">
                                <div className="whychoose-card-icon">
                                  <img
                                    loading="lazy"
                                    className="img-fluid"
                                    src="/images/renter.png"
                                    alt="img"
                                  />
                                </div>
                                <div className="whychoose-card-body">
                                  <h3>24/7 аварийна поддръжка</h3>
                                  <p>
                                    Ние сме на разположение 24/7 за спешни случаи и аварии, за да осигурим безопасност и комфорт.
                                  </p>
                                </div>
                              </div>
                            </div>
                            {/* item 3 */}
                            <div className="carosel-item">
                              <div className="whychoose-card-wrapper">
                                <div className="whychoose-card-icon">
                                  <img
                                    loading="lazy"
                                    className="img-fluid"
                                    src="/images/renter.png"
                                    alt="img"
                                  />
                                </div>
                                <div className="whychoose-card-body">
                                  <h3>Поддържане на стойността</h3>
                                  <p>
                                    Редовната поддръжка и грижа поддържат стойността на имота ви и го правят по-привлекателен.
                                  </p>
                                </div>
                              </div>
                            </div>
                            {/* item 4 */}
                            <div className="carosel-item">
                              <div className="whychoose-card-wrapper">
                                <div className="whychoose-card-icon">
                                  <img
                                    loading="lazy"
                                    className="img-fluid"
                                    src="/images/renter.png"
                                    alt="img"
                                  />
                                </div>
                                <div className="whychoose-card-body">
                                  <h3>Безплатна консултация с нас</h3>
                                  <p>
                                    Свържете се с нас за безплатна среща и консултация относно управлението на вашата сграда.
                                  </p>
                                </div>
                              </div>
                            </div>
                            {/* item 5 */}
                            <div className="carosel-item">
                              <div className="whychoose-card-wrapper">
                                <div className="whychoose-card-icon">
                                  <img
                                    loading="lazy"
                                    className="img-fluid"
                                    src="/images/renter.png"
                                    alt="img"
                                  />
                                </div>
                                <div className="whychoose-card-body">
                                  <h3>Своевременни плащания</h3>
                                  <p>
                                    Осигуряваме навременно събиране на такси и плащания към доставчици без забавяния.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* property news */}
        <div className="section propertyNews">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-12 col-md-8 col-lg-6">
                <div className="section-main-heading">
                  <h4>All Property Needs - One Portal</h4>
                  <h2>Find Better Places to Live, Work and Wonder.</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6 mb-4">
                <div className="propertynews-image">
                  <img
                    loading="lazy"
                    className="img-fluid"
                    src="/images/modern-apartment-architecture.jpg"
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6 offset-lg-1 col-lg-5 mb-4">
                <div className="propertynews-main-content">
                  <h4>RENT A HOME</h4>
                  <h3>
                    Find, Buy &amp; Own Your
                    <br /> Dream Home
                  </h3>
                  <p>
                    Explore from Apartments, land, builder floors,
                    <br />
                    villas and more
                  </p>
                  <a className="theme-btn btn-secondary" href="rental-property">
                    Explore Buying
                  </a>
                </div>
              </div>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="col-12 col-md-11 col-lg-11 col-xl-11">
                <div className="propertynews-overlay">
                  <div className="row">
                    <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                      <div className="propertynews-overlay-left">
                        <h3>Articles and guides for property owners</h3>
                        <p>Read from Beginners check-list to Pro Tips</p>
                      </div>
                    </div>
                    <div className="col-12 col-md-8 col-lg-8 col-xl-8">
                      <div className="propertynews-overlay-right">
                        <div className="row">
                          <div className="col-12 col-md-12 col-lg-6 mb-4">
                            <a href="#" className="propertynews-overlay-right-card">
                              <div className="propertynews-orc-image">
                                <img
                                  loading="lazy"
                                  className="img-fluid"
                                  src="/images/blog-1.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="propertynews-orc-info">
                                <h3>First-class living also in your second home</h3>
                                <p>Jan 20, 2026</p>
                              </div>
                            </a>
                          </div>
                          <div className="col-12 col-md-12 col-lg-6 mb-4">
                            <a href="#" className="propertynews-overlay-right-card">
                              <div className="propertynews-orc-image">
                                <img
                                  loading="lazy"
                                  className="img-fluid"
                                  src="/images/blog-2.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="propertynews-orc-info">
                                <h3>Your elegant first home</h3>
                                <p>Jan 20, 2026</p>
                              </div>
                            </a>
                          </div>
                          <div className="col-12 col-md-12 col-lg-6 mb-4">
                            <a href="#" className="propertynews-overlay-right-card">
                              <div className="propertynews-orc-image">
                                <img
                                  loading="lazy"
                                  className="img-fluid"
                                  src="/images/blog-3.webp"
                                  alt="img"
                                />
                              </div>
                              <div className="propertynews-orc-info">
                                <h3>Prestige with horsepower</h3>
                                <p>Jan 20, 2026</p>
                              </div>
                            </a>
                          </div>
                          <div className="col-12 col-md-12 col-lg-6 mb-4">
                            <a href="#" className="propertynews-overlay-right-card">
                              <div className="propertynews-orc-image">
                                <img
                                  loading="lazy"
                                  className="img-fluid"
                                  src="/images/blog-4.webp"
                                  alt="img"
                                />
                              </div>
                              <div className="propertynews-orc-info">
                                <h3>Discretion via private office</h3>
                                <p>Jan 20, 2026</p>
                              </div>
                            </a>
                          </div>
                          <div className="col-12 col-md-12 col-lg-12">
                            <div className="propertynews-all-link">
                              <a href="#">
                                Read realty news, guides &amp; articles{" "}
                                <span className="material-icons">
                                  arrow_right_alt
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* property management */}
        <div className="section propertyMdone pt-0">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="propertyMdone-heading">
                  <h3>Property management done right!</h3>
                  <p>Lorem ipsum sit amit</p>
                </div>
              </div>
            </div>
            <div className="row">
              {/* card 1 */}
              <div className="col-12 col-md-6 col-lg-6 mb-4">
                <div className="propertyMdone-card mdc-1">
                  <img
                    loading="lazy"
                    className="img-fluid"
                    src="/images/ask.png"
                    alt="img"
                  />
                  <h3>Verified Tenants</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <a className="propertyMdone-km-link" href="#">
                    Know More <i className="fa fa-long-arrow-right" />
                  </a>
                  <div className="propertyMdone-overlay-img">
                    <img
                      loading="lazy"
                      className="img-fluid"
                      src="/images/realEstate-img.png"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
              {/* card 2 */}
              <div className="col-12 col-md-6 col-lg-6 mb-4">
                <div className="propertyMdone-card mdc-2">
                  <img
                    loading="lazy"
                    className="img-fluid"
                    src="/images/ask.png"
                    alt="img"
                  />
                  <h3>Tenant Management</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <a className="propertyMdone-km-link" href="#">
                    Know More <i className="fa fa-long-arrow-right" />
                  </a>
                  <div className="propertyMdone-overlay-img">
                    <img
                      loading="lazy"
                      className="img-fluid"
                      src="/images/realEstate-img.png"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
              {/* card 3 */}
              <div className="col-12 col-md-6 col-lg-6 mb-4">
                <div className="propertyMdone-card mdc-3">
                  <img
                    loading="lazy"
                    className="img-fluid"
                    src="/images/ask.png"
                    alt="img"
                  />
                  <h3>Maintenance &amp; Interiors</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <a className="propertyMdone-km-link" href="#">
                    Know More <i className="fa fa-long-arrow-right" />
                  </a>
                  <div className="propertyMdone-overlay-img">
                    <img
                      loading="lazy"
                      className="img-fluid"
                      src="/images/realEstate-img.png"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
              {/* card 4 */}
              <div className="col-12 col-md-6 col-lg-6 mb-4">
                <div className="propertyMdone-card mdc-4">
                  <img
                    loading="lazy"
                    className="img-fluid"
                    src="/images/ask.png"
                    alt="img"
                  />
                  <h3>Rent Collection</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <a className="propertyMdone-km-link" href="#">
                    Know More <i className="fa fa-long-arrow-right" />
                  </a>
                  <div className="propertyMdone-overlay-img">
                    <img
                      loading="lazy"
                      className="img-fluid"
                      src="/images/realEstate-img.png"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* how it works */}
        <div className="section howitWorks">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-12 col-md-8 col-lg-6">
                <div className="section-main-heading">
                  <h4>All Property Needs - One Portal</h4>
                  <h2>How It Works</h2>
                </div>
              </div>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="col-12 col-md-6 col-lg-4 mb-4">
                {/* card 1 */}
                <div className="howitWorks-card">
                  <div className="howitWorks-card-icon hiw-1">
                    <img
                      loading="lazy"
                      className="img-fluid"
                      src="/images/real-estate.png"
                      alt="img"
                    />
                  </div>
                  <div className="howitWorks-card-body">
                    <h3>Property Information</h3>
                    <p>
                      The House owner contacts Housewise and enters into an
                      agreement with Housewise to manage/rent-out the property
                      (Flat/Bungalow) on the house owner’s behalf.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-4">
                {/* card 2 */}
                <div className="howitWorks-card">
                  <div className="howitWorks-card-icon hiw-2">
                    <img
                      loading="lazy"
                      className="img-fluid"
                      src="/images/file.png"
                      alt="img"
                    />
                  </div>
                  <div className="howitWorks-card-body">
                    <h3>Anaysis History</h3>
                    <p>
                      The House owner contacts Housewise and enters into an
                      agreement with Housewise to manage/rent-out the property
                      (Flat/Bungalow) on the house owner’s behalf.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-4">
                {/* card 3 */}
                <div className="howitWorks-card">
                  <div className="howitWorks-card-icon hiw-3">
                    <img
                      loading="lazy"
                      className="img-fluid"
                      src="/images/price-tag.png"
                      alt="img"
                    />
                  </div>
                  <div className="howitWorks-card-body">
                    <h3>Pricing Information</h3>
                    <p>
                      The House owner contacts Housewise and enters into an
                      agreement with Housewise to manage/rent-out the property
                      (Flat/Bungalow) on the house owner’s behalf.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-4">
                {/* card 4 */}
                <div className="howitWorks-card">
                  <div className="howitWorks-card-icon hiw-4">
                    <img
                      loading="lazy"
                      className="img-fluid"
                      src="/images/deal.png"
                      alt="img"
                    />
                  </div>
                  <div className="howitWorks-card-body">
                    <h3>Deal Details</h3>
                    <p>
                      The House owner contacts Housewise and enters into an
                      agreement with Housewise to manage/rent-out the property
                      (Flat/Bungalow) on the house owner’s behalf.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-4">
                {/* card 5 */}
                <div className="howitWorks-card">
                  <div className="howitWorks-card-icon hiw-5">
                    <img
                      loading="lazy"
                      className="img-fluid"
                      src="/images/pay-per-lead.png"
                      alt="img"
                    />
                  </div>
                  <div className="howitWorks-card-body">
                    <h3>Lead Information</h3>
                    <p>
                      The House owner contacts Housewise and enters into an
                      agreement with Housewise to manage/rent-out the property
                      (Flat/Bungalow) on the house owner’s behalf.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-4">
                {/* card 6 */}
                <div className="howitWorks-card">
                  <div className="howitWorks-card-icon hiw-6">
                    <img
                      loading="lazy"
                      className="img-fluid"
                      src="/images/application.png"
                      alt="img"
                    />
                  </div>
                  <div className="howitWorks-card-body">
                    <h3>Basic Information</h3>
                    <p>
                      The House owner contacts Housewise and enters into an
                      agreement with Housewise to manage/rent-out the property
                      (Flat/Bungalow) on the house owner’s behalf.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* projects */}
        <div className="section projects">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="propertyMdone-heading">
                  <h3>Handpicked Residential Projects</h3>
                  <p>Lorem ipsum sit amit</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="carosel-root">
                  <div className="carosel project">
                    {/* item 1 */}
                    <div className="carosel-item">
                      <div className="project-card">
                        <div className="project-card-image">
                          <img
                            loading="lazy"
                            className="img-fluid"
                            src="/images/project-1.jfif"
                            alt="img"
                          />
                        </div>
                        <div className="project-card-content">
                          <div className="project-card-top">
                            <div className="project-card-top-left">
                              <span className="pctl-apartment">
                                <i className="fa fa-building" />
                                Apartment
                              </span>
                              <span className="pctl-family">
                                <i className="fa fa-user" />
                                Family
                              </span>
                            </div>
                            <div className="project-card-top-left">
                              <a href="#">
                                <i className="fa fa-heart" />
                              </a>
                            </div>
                          </div>
                          <div className="project-card-body">
                            <a href="#">
                              <h3>
                                18730 square feet Land in Pagosa Springs, Colorado
                              </h3>
                            </a>
                            <h2>$675,000</h2>
                            <ul>
                              <li>
                                <i className="fa fa-bath" />2 bathroom
                              </li>
                              <li>
                                <i className="fa fa-bed" />2 bedroom
                              </li>
                              <li>
                                <i className="fa fa-square-o" />
                                18,730 sq.ft
                              </li>
                            </ul>
                          </div>
                          <div className="project-card-bottom">
                            <p>Listing provided by property owner</p>
                            <a className="project-card-detail-btn" href="#">
                              View Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* item 2 */}
                    <div className="carosel-item">
                      <div className="project-card">
                        <div className="project-card-image">
                          <img
                            loading="lazy"
                            className="img-fluid"
                            src="/images/project-2.jfif"
                            alt="img"
                          />
                        </div>
                        <div className="project-card-content">
                          <div className="project-card-top">
                            <div className="project-card-top-left">
                              <span className="pctl-apartment">
                                <i className="fa fa-building" />
                                Apartment
                              </span>
                              <span className="pctl-family">
                                <i className="fa fa-user" />
                                Family
                              </span>
                            </div>
                            <div className="project-card-top-left">
                              <a href="#">
                                <i className="fa fa-heart" />
                              </a>
                            </div>
                          </div>
                          <div className="project-card-body">
                            <a href="#">
                              <h3>15681 square feet Land in Bend, Oregon</h3>
                            </a>
                            <h2>$950,000</h2>
                            <ul>
                              <li>
                                <i className="fa fa-bath" />2 bathroom
                              </li>
                              <li>
                                <i className="fa fa-bed" />2 bedroom
                              </li>
                              <li>
                                <i className="fa fa-square-o" />
                                15,681 sq.ft
                              </li>
                            </ul>
                          </div>
                          <div className="project-card-bottom">
                            <p>Listing provided by property owner</p>
                            <a className="project-card-detail-btn" href="#">
                              View Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* item 3 */}
                    <div className="carosel-item">
                      <div className="project-card">
                        <div className="project-card-image">
                          <img
                            loading="lazy"
                            className="img-fluid"
                            src="/images/project-3.jfif"
                            alt="img"
                          />
                        </div>
                        <div className="project-card-content">
                          <div className="project-card-top">
                            <div className="project-card-top-left">
                              <span className="pctl-apartment">
                                <i className="fa fa-building" />
                                Apartment
                              </span>
                              <span className="pctl-family">
                                <i className="fa fa-user" />
                                Family
                              </span>
                            </div>
                            <div className="project-card-top-left">
                              <a href="#">
                                <i className="fa fa-heart" />
                              </a>
                            </div>
                          </div>
                          <div className="project-card-body">
                            <a href="#">
                              <h3>134600 square feet Land in Bessemer, Alabama</h3>
                            </a>
                            <h2>$18,500</h2>
                            <ul>
                              <li>
                                <i className="fa fa-bath" />2 bathroom
                              </li>
                              <li>
                                <i className="fa fa-bed" />2 bedroom
                              </li>
                              <li>
                                <i className="fa fa-square-o" />
                                3.09 ac
                              </li>
                            </ul>
                          </div>
                          <div className="project-card-bottom">
                            <p>Listing provided by property owner</p>
                            <a className="project-card-detail-btn" href="#">
                              View Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* item 4 */}
                    <div className="carosel-item">
                      <div className="project-card">
                        <div className="project-card-image">
                          <img
                            loading="lazy"
                            className="img-fluid"
                            src="/images/project-4.jfif"
                            alt="img"
                          />
                        </div>
                        <div className="project-card-content">
                          <div className="project-card-top">
                            <div className="project-card-top-left">
                              <span className="pctl-apartment">
                                <i className="fa fa-building" />
                                Apartment
                              </span>
                              <span className="pctl-family">
                                <i className="fa fa-user" />
                                Family
                              </span>
                            </div>
                            <div className="project-card-top-left">
                              <a href="#">
                                <i className="fa fa-heart" />
                              </a>
                            </div>
                          </div>
                          <div className="project-card-body">
                            <a href="#">
                              <h3>
                                0 square feet Land in Taos Ski Valley, New Mexico
                              </h3>
                            </a>
                            <h2>$2,469,000</h2>
                            <ul>
                              <li>
                                <i className="fa fa-bath" />2 bathroom
                              </li>
                              <li>
                                <i className="fa fa-bed" />2 bedroom
                              </li>
                              <li>
                                <i className="fa fa-square-o" />
                                2.63 ac
                              </li>
                            </ul>
                          </div>
                          <div className="project-card-bottom">
                            <p>Listing provided by property owner</p>
                            <a className="project-card-detail-btn" href="#">
                              View Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* item 5 */}
                    <div className="carosel-item">
                      <div className="project-card">
                        <div className="project-card-image">
                          <img
                            loading="lazy"
                            className="img-fluid"
                            src="/images/project-5.jfif"
                            alt="img"
                          />
                        </div>
                        <div className="project-card-content">
                          <div className="project-card-top">
                            <div className="project-card-top-left">
                              <span className="pctl-apartment">
                                <i className="fa fa-building" />
                                Apartment
                              </span>
                              <span className="pctl-family">
                                <i className="fa fa-user" />
                                Family
                              </span>
                            </div>
                            <div className="project-card-top-left">
                              <a href="#">
                                <i className="fa fa-heart" />
                              </a>
                            </div>
                          </div>
                          <div className="project-card-body">
                            <a href="#">
                              <h3>1129510 square feet Land in Heber City, Utah</h3>
                            </a>
                            <h2>$2,369,000</h2>
                            <ul>
                              <li>
                                <i className="fa fa-bath" />2 bathroom
                              </li>
                              <li>
                                <i className="fa fa-bed" />2 bedroom
                              </li>
                              <li>
                                <i className="fa fa-square-o" />
                                1200 sq.ft
                              </li>
                            </ul>
                          </div>
                          <div className="project-card-bottom">
                            <p>Listing provided by property owner</p>
                            <a className="project-card-detail-btn" href="#">
                              View Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* item 6 */}
                    <div className="carosel-item">
                      <div className="project-card">
                        <div className="project-card-image">
                          <img
                            loading="lazy"
                            className="img-fluid"
                            src="/images/project-6.jfif"
                            alt="img"
                          />
                        </div>
                        <div className="project-card-content">
                          <div className="project-card-top">
                            <div className="project-card-top-left">
                              <span className="pctl-apartment">
                                <i className="fa fa-building" />
                                Apartment
                              </span>
                              <span className="pctl-family">
                                <i className="fa fa-user" />
                                Family
                              </span>
                            </div>
                            <div className="project-card-top-left">
                              <a href="#">
                                <i className="fa fa-heart" />
                              </a>
                            </div>
                          </div>
                          <div className="project-card-body">
                            <a href="#">
                              <h3>Multi-Family in Jersey City, New Jersey</h3>
                            </a>
                            <h2>$975,000</h2>
                            <ul>
                              <li>
                                <i className="fa fa-bath" />2 bathroom
                              </li>
                              <li>
                                <i className="fa fa-bed" />2 bedroom
                              </li>
                              <li>
                                <i className="fa fa-square-o" />
                                1742 sq.ft
                              </li>
                            </ul>
                          </div>
                          <div className="project-card-bottom">
                            <p>Listing provided by property owner</p>
                            <a className="project-card-detail-btn" href="#">
                              View Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* testimonial */}
        <div className="section testimonial">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="testimonial-wrapper">
                  <div className="row">
                    <div className="col-12 col-md-12 col-lg-6">
                      <div className="section-main-heading text-left">
                        <h4 className="text-left">Testimonial</h4>
                        <h2 className="text-left">
                          What our customers are saying about ДомоМениджър
                        </h2>
                        <p className="mt-3">
                          Hear from our satisfied buyers, tenants, owners and
                          dealers
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-12 col-lg-12">
                      <div className="carosel-root">
                        <div className="carosel testimonial">
                          {/* item 1 */}
                          <div className="carosel-item">
                            <div className="testimonial-card">
                              <div className="testimonial-card-top">
                                <img
                                  loading="lazy"
                                  className="img-fluid"
                                  src="/images/our-team-1.jpg"
                                  alt="img"
                                />
                                <div className="testimonial-author-info">
                                  <h3>John Doe</h3>
                                  <h4>Owner, New York</h4>
                                </div>
                              </div>
                              <div className="testimonial-card-body">
                                <p>
                                  You get an exclusive RM from ДомоМениджър team who
                                  tracks your property closely
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* item 1 */}
                          <div className="carosel-item">
                            <div className="testimonial-card">
                              <div className="testimonial-card-top">
                                <img
                                  loading="lazy"
                                  className="img-fluid"
                                  src="/images/our-team-2.jpg"
                                  alt="img"
                                />
                                <div className="testimonial-author-info">
                                  <h3>Srikanth Malleboina</h3>
                                  <h4>Owner, America</h4>
                                </div>
                              </div>
                              <div className="testimonial-card-body">
                                <p>
                                  You get an exclusive RM from ДомоМениджър team who
                                  tracks your property closely
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* item 1 */}
                          <div className="carosel-item">
                            <div className="testimonial-card">
                              <div className="testimonial-card-top">
                                <img
                                  loading="lazy"
                                  className="img-fluid"
                                  src="/images/our-team-3.jpg"
                                  alt="img"
                                />
                                <div className="testimonial-author-info">
                                  <h3>Mary Cort</h3>
                                  <h4>Owner, Mexico</h4>
                                </div>
                              </div>
                              <div className="testimonial-card-body">
                                <p>
                                  You get an exclusive RM from ДомоМениджър team who
                                  tracks your property closely
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* item 1 */}
                          <div className="carosel-item">
                            <div className="testimonial-card">
                              <div className="testimonial-card-top">
                                <img
                                  loading="lazy"
                                  className="img-fluid"
                                  src="/images/our-team-4.jpg"
                                  alt="img"
                                />
                                <div className="testimonial-author-info">
                                  <h3>Max Minth</h3>
                                  <h4>Owner, New Jersy</h4>
                                </div>
                              </div>
                              <div className="testimonial-card-body">
                                <p>
                                  You get an exclusive RM from ДомоМениджър team who
                                  tracks your property closely
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* advantages */}
        <div className="section howitWorks">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-12 col-md-8 col-lg-6">
                <div className="section-main-heading">
                  <h4>Advantages</h4>
                  <h2>The ДомоМениджър Advantage</h2>
                </div>
              </div>
            </div>
            <div className="row align-items-center justify-content-center mt-4">
              <div className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="advantage-card">
                  <div className="advantage-card-icon aci-1">
                    <img
                      loading="lazy"
                      className="img-fluid"
                      src="/images/return-of-investment.png"
                      alt="img"
                    />
                  </div>
                  <div className="advantage-card-body">
                    <h3>
                      <span>01. </span>Maximize Rental Returns
                    </h3>
                    <p>
                      Verified Tenants. Cross platform advertising, including video
                      marketing. Rental predictor tools to help maximize rents and
                      minimize vacancies. Pay ONLY when tenanted.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="advantage-card">
                  <div className="advantage-card-icon aci-2">
                    <img
                      loading="lazy"
                      className="img-fluid"
                      src="/images/software.png"
                      alt="img"
                    />
                  </div>
                  <div className="advantage-card-body">
                    <h3>
                      <span>02. </span>Real-time Updates on Website
                    </h3>
                    <p>
                      Verified Tenants. Cross platform advertising, including video
                      marketing. Rental predictor tools to help maximize rents and
                      minimize vacancies. Pay ONLY when tenanted.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="advantage-card">
                  <div className="advantage-card-icon aci-3">
                    <img
                      loading="lazy"
                      className="img-fluid"
                      src="/images/management.png"
                      alt="img"
                    />
                  </div>
                  <div className="advantage-card-body">
                    <h3>
                      <span>03. </span>Assigned Service Managers
                    </h3>
                    <p>
                      Verified Tenants. Cross platform advertising, including video
                      marketing. Rental predictor tools to help maximize rents and
                      minimize vacancies. Pay ONLY when tenanted.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* exclusive */}
        <div className="section projects">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="propertyMdone-heading">
                  <h3>ДомоМениджър Exclusive</h3>
                  <p>Sponsored projects and events</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="carosel-root">
                  <div className="carosel exclusive">
                    {/* item 1 */}
                    <div className="carosel-item">
                      <div className="exclusive-card">
                        <a href="#">
                          <img
                            loading="lazy"
                            className="img-fluid"
                            src="/images/exclusive-1.jpg"
                            alt="img"
                          />
                        </a>
                      </div>
                    </div>
                    {/* item 2 */}
                    <div className="carosel-item">
                      <div className="exclusive-card">
                        <a href="#">
                          <img
                            loading="lazy"
                            className="img-fluid"
                            src="/images/exclusive-2.png"
                            alt="img"
                          />
                        </a>
                      </div>
                    </div>
                    {/* item 3 */}
                    <div className="carosel-item">
                      <div className="exclusive-card">
                        <a href="#">
                          <img
                            loading="lazy"
                            className="img-fluid"
                            src="/images/exclusive-3.jpg"
                            alt="img"
                          />
                        </a>
                      </div>
                    </div>
                    {/* item 4 */}
                    <div className="carosel-item">
                      <div className="exclusive-card">
                        <a href="#">
                          <img
                            loading="lazy"
                            className="img-fluid"
                            src="/images/exclusive-4.jpg"
                            alt="img"
                          />
                        </a>
                      </div>
                    </div>
                    {/* item 5 */}
                    <div className="carosel-item">
                      <div className="exclusive-card">
                        <a href="#">
                          <img
                            loading="lazy"
                            className="img-fluid"
                            src="/images/exclusive-2.png"
                            alt="img"
                          />
                        </a>
                      </div>
                    </div>
                    {/* item 6 */}
                    <div className="carosel-item">
                      <div className="exclusive-card">
                        <a href="#">
                          <img
                            loading="lazy"
                            className="img-fluid"
                            src="/images/exclusive-3.jpg"
                            alt="img"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
