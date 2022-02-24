import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { saveUSerQuestion } from "../functions/user";

const Help = () => {
  const [question, setQuestion] = useState("");

  const { user } = useSelector((state) => ({ ...state }));

  const saveQuestion = () => {
    saveUSerQuestion(user.token, question).then(() => {
      toast.success("Your question will be reviewed, thank you");
    });
  };

  return (
    <>
      <div className="container">
        <h4>Frequently Asked Questions:</h4>
        <br />
        <div id="accordion">
          <div className="card">
            <div className="card-header">
              <h4 className="card-link col-md-5">
                How do I go to all products?
              </h4>
            </div>
            <div>
              <h6 className="card-body">
                You can go to{" "}
                <span>
                  <Link to="/shop" className="text-danger">
                    ALL
                  </Link>
                </span>{" "}
                To find all products
              </h6>
            </div>
          </div>
          <br />
          <div className="card">
            <div className="card-header">
              <h4 className="collapsed card-link">How can I contact you?</h4>
            </div>
            <div>
              <h6 className="card-body">
                You can contact us on WhatsApp via the following number{" "}
                <span className="text-danger">+9962</span>
              </h6>
            </div>
          </div>
          <br />
          <div className="card">
            <div className="card-header">
              <h4 className="collapsed card-link">Can I exchange products?</h4>
            </div>
            <div>
              <h6 className="card-body">
                Not all products, but you can return some products upon delivery
                if they have any defects
              </h6>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={user.email}
            className="form-control"
            disabled
          />
        </div>
        <br />
        <div className="form-group">
          <label>Add Your Question</label>
          <textarea
            className="form-control"
            rows="3"
            value={question}
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          onClick={saveQuestion}
          className="btn btn-primary"
        >
          Send
        </button>
      </div>
    </>
  );
};

export default Help;
