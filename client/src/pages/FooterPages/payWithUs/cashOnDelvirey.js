import React from "react";
import image1 from "./images/1.png";
import image2 from "./images/2.png";
import image3 from "./images/3.png";

const cashOnDelvirey = () => {
  return (
    <>
      <div className="container">
        <br />
        <div id="accordion">
          <div className="card">
            <div className="card-header">
              <h4 className="card-link col-md-5">Pay on delivery</h4>
            </div>
            <div>
              <h6 className="card-body">
                We now offer Cash on Delivery as a payment option
              </h6>
              <h6 className="card-body">
                Please note:
                <br />
                <br />
                <p>
                  - The delivery person collects the total amount due upon
                  delivery of the order.
                </p>
                <p>
                  {" "}
                  - Only local currency (Jordanian Dinar) will be accepted.{" "}
                </p>
                <p>
                  - The delivery agent will collect the total amount due upon
                  delivery of the order
                </p>
                <p>
                  - You can exchange or return the product if there is any
                  manufacturing defect upon receipt
                </p>
              </h6>
              <h4 className="card-body">Here's how to do it:</h4>
            </div>
            <div className="card-body">
              <img
                className="card-img"
                src={image1}
                alt="image1"
                style={{ width: "100px" }}
              />
              <h5 className="card-title">Make an order</h5>
              <p className="card-text">
                Make a purchase and fill in your complete information
              </p>
            </div>
            <div className="card-body">
              <img
                className="card-img"
                src={image2}
                alt="image1"
                style={{ width: "100px" }}
              />
              <h5 className="card-title">We deliver your order</h5>
              <p className="card-text">
                The order will come to your home, you will receive a text
                message and a call when the order is on its way to you
              </p>
            </div>
            <div className="card-body">
              <img
                className="card-img"
                src={image3}
                alt="image1"
                style={{ width: "100px" }}
              />
              <h5 className="card-title">Pay cash at your doorstep </h5>
              <p className="card-text">
                The delivery person collects the amount due and the total of the
                order and delivers the product to you{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default cashOnDelvirey;
