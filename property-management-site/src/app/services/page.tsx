"use client";

export default function Services() {
    return (
        <div className="main-content-wrapper">
            <div className="pageBanner">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="pageBanner-inner">
                                <h2>Services</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* property management */}
            <div className="section propertyMdone">
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
                                <h3>Защо да изберем професионален домоуправител, а не съсед?</h3>
                                <p>
                                    Законът за управление на етажната собственост изисква всяка сграда да има управление, което да отговаря за документацията, финансите и решенията на Общото събрание.
                                    Когато тази роля се изпълнява от професионален домоуправител, входът получава законосъобразно управление, прозрачност и спокойствие, без лични конфликти между съседи. Ние поемаме цялата административна и организационна тежест вместо вас.
                                </p>
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
                                <h3>Законно ли е входът да има външна фирма за управление?</h3>
                                <p>
                                    Да.
                                    ЗУЕС изрично позволява управлението на етажната собственост да бъде възложено на професионален домоуправител чрез договор, прието с решение на Общо събрание. Това гарантира, че всички дейности – събиране на такси, поддръжка, ремонти и отчетност – се извършват по закон.
                                </p>
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
                                <h3>Как се гарантира прозрачност при управлението на парите?</h3>
                                <p>
                                    Законът изисква ясно и отчетно управление на средствата на етажната собственост.
                                    Като професионален домоуправител, ние осигуряваме пълна финансова прозрачност – ясно разпределение на таксите, отчет за разходите и контрол върху средствата, включително във фонд „Ремонт и обновление“.
                                </p>
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
                                <h3>Как професионалният домоуправител улеснява живота на собствениците?</h3>
                                <p>
                                    Нашата задача е да бъдем връзката между закона и ежедневието във входа.
                                    Ние поемаме организацията, документацията и спазването на Закона за управление на етажната собственост, така че собствениците да не се занимават с административни проблеми и да живеят в поддържана и добре управлявана сграда.
                                </p>
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
            {/* testimonial */}
            <div className="section testimonial pt-0">
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
                                                Hear from our satisfied buyers, tenants, owners and dealers
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
        </div>
    );
}
