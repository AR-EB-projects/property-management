"use client";

export default function AboutUs() {
    return (
        <div className="main-content-wrapper">
            <div className="section pageHeading">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="section-main-heading text-left">
                                <h2 className="text-left">Ние разбираме управлението на сгради</h2>
                                <p className="mt-2">Защото ние сме професионални домоуправители от ДомоМениджър</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="page-banner-wrapper">
                                <img
                                    loading="lazy"
                                    className="img-fluid"
                                    src="/images/modern-apartment-architecture.jpg"
                                    alt="img"
                                />
                                <div className="page-banner-content">
                                    <h3>За ДомоМениджър</h3>
                                    <p>
                                        ДомоМениджър е водеща компания за пълно управление на сгради в България.
                                        Компанията предлага професионални услуги по управление на етажна собственост,
                                        техническа поддръжка и финансово управление. Планираме също
                                        да разширим услугите си в големи градове като Пловдив,
                                        Варна и Бургас.
                                    </p>
                                    <p>
                                        Компанията е основана през 2026 г. в София от екип специалисти с дългогодишен опит
                                        в управлението на имоти. Те се досетиха за идеята да решат проблемите на неорганизирания
                                        пазар на етажна собственост. Така се ражда ДомоМениджър с основната цел да предостави
                                        спокойствие и ред на всички собственици.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* welcome */}
            <div className="section welcome">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6 mb-4">
                            <div className="welcome-image">
                                <img
                                    loading="lazy"
                                    className="img-fluid"
                                    src="/images/welcome.png"
                                    alt="img"
                                />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 mb-4">
                            <div className="welcome-content">
                                <h3>Добре дошли в ДомоМениджър</h3>
                                <p>
                                    ДомоМениджър е компания за управление на сгради в България, за
                                    всички собственици. Основана е на принципите на етика,
                                    прозрачност и качество. Компанията предоставя услуги по управление на етажна собственост
                                    в цялата страна. Имаме доволни клиенти от
                                    над 30 големи жилищни комплекса. Включва София, Пловдив,
                                    Варна, Бургас и много други.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* we belive */}
            <div className="section weBelieve">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-12 col-md-8 col-lg-8">
                            <div className="section-main-heading">
                                {/* <h4>About Us</h4> */}
                                <h2>В какво вярваме</h2>
                                <p className="mt-2 text-center">
                                    В ДомоМениджър знаем, че едно решение е толкова силно,
                                    колкото културата, която го подхранва. Ето ценностите, в които вярваме:
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="webelive-list">
                                <ul>
                                    <li>Първо фокусираме върху клиентите</li>
                                    <li>Бъдете полезни и подкрепящи</li>
                                    <li>Комуникирайте открито и честно</li>
                                    <li>Бъдете гъвкави и адаптивни</li>
                                    <li>Поемайте инициатива и работете усърдно</li>
                                    <li>Бъдете страстни и се забавлявайте</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* cards */}
            <div className="section linkCards">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6 mb-4">
                            <div className="linkCards-wrapper team">
                                <h3>Нашият екип</h3>
                                <a href="#" className="theme-btn linkCards-btn">
                                    Запознайте се с нашия екип
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 mb-4">
                            <div className="linkCards-wrapper team">
                                <h3>Работа в ДомоМениджър</h3>
                                <a href="#" className="theme-btn linkCards-btn">
                                    Работете с нас!
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* points */}
            <div className="section points pt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="about-point-wrapper">
                                <ul>
                                    <li className="about-point-item">
                                        <div className="about-point-item-inner">
                                            <img
                                                loading="lazy"
                                                className="img-fluid"
                                                src="/images/trust.png"
                                                alt="img"
                                            />
                                            <h2>Прозрачност и отчетност</h2>
                                        </div>
                                    </li>
                                    <li className="about-point-item">
                                        <div className="about-point-item-inner">
                                            <img
                                                loading="lazy"
                                                className="img-fluid"
                                                src="/images/project-management.png"
                                                alt="img"
                                            />
                                            <h2>Дигитално управление</h2>
                                        </div>
                                    </li>
                                    <li className="about-point-item">
                                        <div className="about-point-item-inner">
                                            <img
                                                loading="lazy"
                                                className="img-fluid"
                                                src="/images/excellence.png"
                                                alt="img"
                                            />
                                            <h2>Качество и поддръжка</h2>
                                        </div>
                                    </li>
                                    <li className="about-point-item">
                                        <div className="about-point-item-inner">
                                            <img
                                                loading="lazy"
                                                className="img-fluid"
                                                src="/images/seller.png"
                                                alt="img"
                                            />
                                            <h2>Собственост и ред</h2>
                                        </div>
                                    </li>
                                    <li className="about-point-item">
                                        <div className="about-point-item-inner">
                                            <img
                                                loading="lazy"
                                                className="img-fluid"
                                                src="/images/innovation.png"
                                                alt="img"
                                            />
                                            <h2>Модерни решения</h2>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
