import React from "react";
import "../../../helper.css";

const JoinWithUs = () => {
  return (
    <>
      <div className="container">
        <br />
        <div id="accordion">
          <div className="card">
            <div className="card-header">
              <h4 className="card-link col-md-5">Joining to FarhanShop</h4>
            </div>
            <div>
              <h6 className="card-body text-right">
                You can join us on social media.{" "}
              </h6>
              <section className="mb-3 text-center">
                <a
                  className="btn btn-outline-black btn-floating m-1 font-size-icons"
                  href="https://www.facebook.com/TetraZones-109210124641188"
                  role="button"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>

                <a
                  className="btn btn-outline-black btn-floating m-1 font-size-icons"
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-twitter"></i>
                </a>

                <a
                  className="btn btn-outline-black btn-floating m-1 font-size-icons"
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-google"></i>
                </a>

                <a
                  className="btn btn-outline-black btn-floating m-1 font-size-icons"
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-instagram"></i>
                </a>

                <a
                  className="btn btn-outline-black btn-floating m-1 font-size-icons"
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinWithUs;
