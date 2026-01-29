"use client";

export default function AboutUs() {
    return (
        <div className="main-content-wrapper">
            <div className="section pageHeading">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="section-main-heading text-left">
                                <h2 className="text-left">Ние разбираме управлението на имоти</h2>
                                <p className="mt-2">Защото ние сме домоуправители</p>
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
                                    <h3>За нас</h3>
                                    <p>
                                        Property е компания за пълно управление на имоти в света.
                                        Компанията предлага услуги по управление под наем и управление на имоти
                                        и онлайн услуги за наемни договори. Планираме също
                                        да разширим услугите си в градове като Америка, Ню
                                        Йорк и др.
                                    </p>
                                    <p>
                                        Компанията е основана през 2026 г. в Ню Йорк от завършил IBA. Той
                                        се досетил за идеята да реши проблемите на неорганизирания
                                        пазар на имоти. Така се ражда Housewise с основната цел да предостави
                                        Дом на хората на тяхното удобство.
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
                                <h3>Добре дошли в управление на имоти</h3>
                                <p>
                                    Housewise е компания за управление на имоти в света, за
                                    американци. Основана е на принципите на етика,
                                    прозрачност и качество. Компанията предоставя услуги по управление на имоти за NRI
                                    в целия свят. Имаме лоялни клиенти от
                                    над 28 държави по света. Включва САЩ, Канада,
                                    Австралия, Нова Зеландия, Великобритания и много други.
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
                                    В управление на имоти знаем, че едно решение е толкова силно,
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
                                <h3>Работа в Property</h3>
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
                                            <h2>Доверие и почтеност</h2>
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
                                            <h2>Технологии</h2>
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
                                            <h2>Отличие</h2>
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
                                            <h2>Отговорност</h2>
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
                                            <h2>Иновации</h2>
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
