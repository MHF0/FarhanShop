import React from "react";
import '../../helper.css'
const Footer = () => {

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
      <footer className="nav-color text-center text-white footer-container">
        <button
          className="btn btn-outline-light btn-floating m-1 border-radius"
          onClick={scrollTop}
        >
          back to top
        </button>
        <div className="container p-4">
          <section className="mb-4">
            <a
              className="btn btn-outline-light btn-floating m-1 border-radius"
              href="https://www.facebook.com/TetraZones-109210124641188"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1 border-radius"
              href="https://twitter.com/ZonesTetra"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1 border-radius"
              href="https://www.instagram.com/tetrazones"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1 border-radius"
              href="https://www.linkedin.com/company/tetrazones"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </section>

          <section className="">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase footer-text-icon">
                  Let us help you
                </h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a
                      href="/user/history"
                      className="text-white border-footer"
                    >
                      {" "}
                      your account
                    </a>
                  </li>
                  <li>
                    <a
                      href="/user/history"
                      className="text-white border-footer"
                    >
                      {" "}
                      your purchases
                    </a>
                  </li>
                  <li>
                    <a href="/user/help" className="text-white border-footer">
                      Help
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase footer-text-icon">
                  Payment method
                </h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a
                      href="/cashOnDelvirey"
                      className="text-white border-footer"
                    >
                      {" "}
                      Pay on delivery
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase footer-text-icon">
                  Learn more about us
                </h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="/jops" className="text-white border-footer">
                      {" "}
                      Careers
                    </a>
                  </li>
                </ul>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="/privacy" className="text-white border-footer">
                      {" "}
                      Site privacy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase footer-text-icon">
                  Become a partner with us
                </h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="/yourSaller" className="text-white border-footer">
                      Sell on TetraZoles
                    </a>
                  </li>
                  <li>
                    <a href="/joinWithUs" className="text-white border-footer">
                      {" "}
                      Join us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/advertiseYourProduct"
                      className="text-white border-footer"
                    >
                      {" "}
                     Advertise your products
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundcolor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2021 Copyright:
          <a className="text-white" href="/">
            {" "}
            TetraZones
          </a>
        </div>
      </footer>
    );
};

export default Footer;
