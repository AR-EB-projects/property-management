"use client";

export default function Header() {
  return (
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
          <div className="collapse navbar-collapse home" id="main_nav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="/about-us">About </a></li>
              <li className="nav-item"><a className="nav-link" href="/plans">Plans </a></li>
              <li className="nav-item"><a className="nav-link" href="/services">Services </a></li>
              <li className="nav-item"><a className="nav-link" href="/properties">Properties </a></li>
              <li className="nav-item dropdown"><a className="nav-link"
                  href="#"
                  id="resources"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources{" "}
                </a>
                <ul className="dropdown-menu" aria-labelledby="resources">
                  <li><a className="dropdown-item" href="/privacy-policy">Privacy Policy</a></li>
                  <li><a className="dropdown-item" href="/terms-and-conditions">Terms &amp; Conditions</a></li>
                </ul>
              </li>
              <li className="nav-item"><a className="nav-link" href="/contact-us">Contact </a></li>
            </ul>
            <div className="d-flex align-items-center">
              <a className="theme-btn btn-white" href="/pages/contact-us">
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
  );
}
