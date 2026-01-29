"use client";

export default function Plans() {
    return (
        <div className="main-content-wrapper">
            <div className="pageBanner">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="pageBanner-inner">
                                <h2>Планове</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* plans */}
            <div className="section plans d-none d-md-none d-lg-block">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="plans-wrapper">
                                {/* head */}
                                <div className="plans-head">
                                    <div className="plans-head-item">
                                        <h5>&nbsp;</h5>
                                    </div>
                                    <div className="plans-head-item">
                                        <div className="plans-head-item-inner phii-1">
                                            <h3>Стандартен пакет</h3>
                                            <p>Всички необходими услуги за вашия имот</p>
                                            <h2>6 €</h2>
                                        </div>
                                    </div>
                                </div>
                                {/* body */}
                                <div className="plans-body">
                                    {/* row */}
                                    <div className="plans-body-row">
                                        <div className="plans-body-item">
                                            <h3 className="plans-body-item-heading">
                                                Касиер
                                            </h3>
                                        </div>
                                        <div className="plans-body-item">
                                            <div className="plans-body-item-include">
                                                <img
                                                    loading="lazy"
                                                    className="img-fluid"
                                                    src="/images/check.png"
                                                    alt="img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* row */}
                                    <div className="plans-body-row">
                                        <div className="plans-body-item">
                                            <h3 className="plans-body-item-heading">
                                                Управител
                                            </h3>
                                        </div>
                                        <div className="plans-body-item">
                                            <div className="plans-body-item-include">
                                                <img
                                                    loading="lazy"
                                                    className="img-fluid"
                                                    src="/images/check.png"
                                                    alt="img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* row */}
                                    <div className="plans-body-row">
                                        <div className="plans-body-item">
                                            <h3 className="plans-body-item-heading">
                                                Юрист
                                            </h3>
                                        </div>
                                        <div className="plans-body-item">
                                            <div className="plans-body-item-include">
                                                <img
                                                    loading="lazy"
                                                    className="img-fluid"
                                                    src="/images/check.png"
                                                    alt="img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* row */}
                                    <div className="plans-body-row">
                                        <div className="plans-body-item">
                                            <h3 className="plans-body-item-heading">
                                                Почистване на входа
                                            </h3>
                                        </div>
                                        <div className="plans-body-item">
                                            <div className="plans-body-item-include">
                                                <img
                                                    loading="lazy"
                                                    className="img-fluid"
                                                    src="/images/check.png"
                                                    alt="img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* row */}
                                    <div className="plans-body-row">
                                        <div className="plans-body-item">
                                            <h3 className="plans-body-item-heading">
                                                Техник
                                            </h3>
                                        </div>
                                        <div className="plans-body-item">
                                            <div className="plans-body-item-include">
                                                <img
                                                    loading="lazy"
                                                    className="img-fluid"
                                                    src="/images/check.png"
                                                    alt="img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* row */}
                                    <div className="plans-body-row">
                                        <div className="plans-body-item">
                                            <h3 className="plans-body-item-heading">
                                                Поддръжка на около входното пространство
                                            </h3>
                                        </div>
                                        <div className="plans-body-item">
                                            <div className="plans-body-item-include">
                                                <img
                                                    loading="lazy"
                                                    className="img-fluid"
                                                    src="/images/check.png"
                                                    alt="img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* plans mobile */}
            <div className="section plans-mobile pt-0 d-block d-md-block d-lg-none">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="plans-wrapper">
                                {/* head */}
                                <div className="plans-head">
                                    <div className="plans-head-item">
                                        <div className="plans-head-item-inner phii-1">
                                            <h3>Пълен Пакет Услуги</h3>
                                            <p>Всички необходими услуги за вашия имот</p>
                                            <h2>6 €</h2>
                                            <ul className="plans-head-item-inner-list">
                                                <li>Касиер</li>
                                                <li>Управител</li>
                                                <li>Юрист</li>
                                                <li>Почистване на входа</li>
                                                <li>Техник</li>
                                                <li>Поддръжка на около входното пространство</li>
                                            </ul>
                                            <a className="theme-btn btn-secondary" href="#">
                                                Започнете сега
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* testimonial */}
            <div className="section testimonial pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="testimonial-wrapper">
                                <div className="row">
                                    <div className="col-12 col-md-12 col-lg-6">
                                        <div className="section-main-heading text-left">
                                            <h4 className="text-left">Отзиви</h4>
                                            <h2 className="text-left">
                                                Какво казват нашите клиенти за ДомоМениджър
                                            </h2>
                                            <p className="mt-3">
                                                Чуйте от нашите доволни купувачи, наематели, собственици и дилъри
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
                                                                <h3>Иван Петров</h3>
                                                                <h4>Собственик, София</h4>
                                                            </div>
                                                        </div>
                                                        <div className="testimonial-card-body">
                                                            <p>
                                                                Получавате ексклузивен мениджър от екипа на ДомоМениджър, който
                                                                следи имота ви отблизо
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
                                                                <h3>Мария Георгиева</h3>
                                                                <h4>Собственик, Пловдив</h4>
                                                            </div>
                                                        </div>
                                                        <div className="testimonial-card-body">
                                                            <p>
                                                                Получавате ексклузивен мениджър от екипа на ДомоМениджър, който
                                                                следи имота ви отблизо
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
                                                                <h3>Георги Иванов</h3>
                                                                <h4>Собственик, Варна</h4>
                                                            </div>
                                                        </div>
                                                        <div className="testimonial-card-body">
                                                            <p>
                                                                Получавате ексклузивен мениджър от екипа на ДомоМениджър, който
                                                                следи имота ви отблизо
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
                                                                <h3>Анна Димитрова</h3>
                                                                <h4>Собственик, Бургас</h4>
                                                            </div>
                                                        </div>
                                                        <div className="testimonial-card-body">
                                                            <p>
                                                                Получавате ексклузивен мениджър от екипа на ДомоМениджър, който
                                                                следи имота ви отблизо
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
    );
}
