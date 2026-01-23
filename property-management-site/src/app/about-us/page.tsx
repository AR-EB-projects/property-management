"use client";

export default function AboutUs() {
    return (
        <>
            <header>
                <nav id="navbar_top" className="navbar navbar-expand-lg navbar-dark">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img
                                loading="lazy"
                                className="img-fluid"
                                src="/images/logo.png"
                                alt="img"
                            />
                            {/* AssetNest */}
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#main_nav"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="main_nav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">
                                        {" "}
                                        About{" "}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/plans">
                                        {" "}
                                        Plans{" "}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/services">
                                        {" "}
                                        Services{" "}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/properties">
                                        {" "}
                                        Properties{" "}
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link"
                                        href="#"
                                        id="resources"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Resources{" "}
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="resources">
                                        <li>
                                            <a className="dropdown-item" href="/blog">
                                                Blog
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/faq">
                                                FAQ
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/testimonial">
                                                Testimonial
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/error">
                                                Error 404
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/coming-soon">
                                                Coming Soon
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="/privacy-policy"
                                            >
                                                Privacy Policy
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="/terms-and-conditions"
                                            >
                                                Terms &amp; Conditions
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact-us">
                                        {" "}
                                        Contact{" "}
                                    </a>
                                </li>
                            </ul>
                            <div className="d-flex align-items-center">
                                <a className="theme-btn btn-white" href="/contact-us">
                                    Post Property <span className="pp-header-info">FREE</span>
                                </a>
                                <a className="header-contact-btn" href="#">
                                    <i className="fa fa-phone" />
                                </a>
                                <a className="header-contact-btn" href="#">
                                    <i className="fa fa-user" />
                                </a>
                            </div>
                        </div>{" "}
                        {/* navbar-collapse.// */}
                    </div>{" "}
                    {/* container-fluid.// */}
                </nav>
            </header>
            <div className="main-content-wrapper">
                <div className="section pageHeading">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-12">
                                <div className="section-main-heading text-left">
                                    <h4 className="text-left">About Us</h4>
                                    <h2 className="text-left">We understand property management</h2>
                                    <p className="mt-2">Because we are property managers</p>
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
                                        <h3>About Us</h3>
                                        <p>
                                            Property is an end to end Property Management Company in World.
                                            The company offers rental management and property management
                                            services and online rent agreement services. We are also
                                            planning to expand our services in cities like America, New
                                            York, etc.
                                        </p>
                                        <p>
                                            The company was founded in 2026 in New York, an IBA graduate. He
                                            came up with the idea to solve the problems of the unorganized
                                            real estate market. This is how Housewise came into existence
                                            with the main aim of providing a Home to the people at their
                                            convenience.
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
                                    <h3>Welcome to Property Management</h3>
                                    <p>
                                        Housewise is a Property Management Company in World, for
                                        Americans. It is founded on the principles of ethics,
                                        transparency, and quality. The company provides NRI property
                                        management services across the globe. We have loyal customers from
                                        over 28 countries around the world. It includes the US, Canada,
                                        Australia, New Zealand, the UK, and many more.
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
                                    <h2>What we believe</h2>
                                    <p className="mt-2 text-center">
                                        At Property Management, we know that a solution is only as strong
                                        as the culture that nurtures it. Here are the values we believe
                                        in:
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-12">
                                <div className="webelive-list">
                                    <ul>
                                        <li>Focus on customers first</li>
                                        <li>Be helpful and supportive</li>
                                        <li>Communicate openly and honestly</li>
                                        <li>Be nimble and flexible</li>
                                        <li>Take initiative and work hard</li>
                                        <li>Be passionate and have fun</li>
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
                                    <h3>Our Team</h3>
                                    <a href="#" className="theme-btn linkCards-btn">
                                        Meet Our Team
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6 mb-4">
                                <div className="linkCards-wrapper team">
                                    <h3>Jobs at Property</h3>
                                    <a href="#" className="theme-btn linkCards-btn">
                                        Come Work With Us!
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
                                                <h2>Trust &amp; Integrity</h2>
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
                                                <h2>Technology</h2>
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
                                                <h2>Excellence</h2>
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
                                                <h2>Ownership</h2>
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
                                                <h2>Innovation</h2>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
