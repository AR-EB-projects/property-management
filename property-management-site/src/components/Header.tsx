"use client";

export default function Header() {
  return (
    <header>
      <nav id="navbar_top" className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="/"><img loading="lazy" className="img-fluid" src="/images/logo.png" alt="img" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"><span className="navbar-toggler-icon" /></button>
          <div className="collapse navbar-collapse home" id="main_nav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="/plans">Plans</a></li>
              <li className="nav-item"><a className="nav-link" href="/services">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="/properties">Properties</a></li>
              <li className="nav-item"><a className="nav-link" href="/about-us">About</a></li>
              <li className="nav-item"><a className="nav-link" href="/contact-us">Contact</a></li>
              <li className="nav-item"><a className="nav-link" href="/privacy-policy">Privacy Policy</a></li>
              <li className="nav-item"><a className="nav-link" href="/terms-and-conditions">Terms &amp; Conditions</a></li>
            </ul>
          </div>{" "}
        </div>{" "}
      </nav>
    </header>
  );
}
