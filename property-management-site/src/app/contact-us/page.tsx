


"use client";

export default function Contact() {
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
            <div className="section contactUs">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6 mb-4">
                            <div className="contactus-content-wrapper">
                                <h1 className="contactus-content-heading">
                                    Let’s explore how Property can work for you
                                </h1>
                                <div className="contactus-content-list">
                                    <div className="contactus-content-list-item">
                                        <i className="fa fa-check" />
                                        <p>
                                            One flexible tool for your entire company to share knowledge,
                                            ship projects, and collaborate.
                                        </p>
                                    </div>
                                    <div className="contactus-content-list-item">
                                        <i className="fa fa-check" />
                                        <p>
                                            Enterprise features to securely manage user access and
                                            security.
                                        </p>
                                    </div>
                                    <div className="contactus-content-list-item">
                                        <i className="fa fa-check" />
                                        <p>
                                            Dedicated support to work with you on your setup and help you
                                            build the best plan for your company.One flexible tool for
                                            your entire company to share knowledge, ship projects, and
                                            collaborate.
                                        </p>
                                    </div>
                                </div>
                                <div className="contactus-content-link">
                                    <p>
                                        Looking for support? Visit{" "}
                                        <a href="#">help &amp; documentation</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 mb-4">
                            <form>
                                <div className="contactus-form-wrapper">
                                    <div className="row">
                                        <div className="col-12 col-md-6 col-lg-6">
                                            <div className="contactus-form-container">
                                                <label className="contactus-label">
                                                    First name <span>*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="contactus-input"
                                                    placeholder="First Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-6">
                                            <div className="contactus-form-container">
                                                <label className="contactus-label">
                                                    Last name <span>*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="contactus-input"
                                                    placeholder="First Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-12 col-lg-12">
                                            <div className="contactus-form-container">
                                                <label className="contactus-label">
                                                    Email <span>*</span>
                                                </label>
                                                <input
                                                    id="txtcontact"
                                                    type="email"
                                                    className="contactus-input"
                                                    placeholder="Email"
                                                />
                                                <div className="error-msg-contact" id="error">
                                                    <p>Invalid email address</p>
                                                </div>
                                            </div>
                                            <div className="success-msg-contact" id="success">
                                                <p>
                                                    <span className="check-success-icon">
                                                        <i className="fa fa-check" />
                                                    </span>
                                                    Message Sent Successfully!
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-12 col-lg-12">
                                            <div className="contactus-form-container">
                                                <label className="contactus-label">
                                                    Country or region <span>*</span>
                                                </label>
                                                <select className="contactus-input">
                                                    <option>Please Select...</option>
                                                    <option>India</option>
                                                    <option>Japan</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-12 col-lg-12">
                                            <div className="contactus-form-container">
                                                <label className="contactus-label">
                                                    Anything else? <span>*</span>
                                                </label>
                                                <textarea
                                                    cols={30}
                                                    rows={4}
                                                    className="contactus-textarea"
                                                    placeholder="How are you looking to use property?"
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-12 col-lg-12">
                                            <div className="contactus-form-links">
                                                <p>
                                                    By submitting this form, I acknowledge receipt of the{" "}
                                                    <a href="#">Property Privacy Policy</a>.
                                                </p>
                                                <p>Fields marked with an asterisk (*) are required.</p>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-12 col-lg-12">
                                            <div className="contactus-form-button mt-4">
                                                <button
                                                    type="button"
                                                    id="demoContact"
                                                    className="theme-btn btn-main"
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
