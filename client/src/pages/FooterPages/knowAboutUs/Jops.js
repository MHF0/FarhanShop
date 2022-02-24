import React from "react";

const Jops = () => {
    return (
      <>
        <div className="container">
          <br />
          <div id="accordion">
            <div className="card">
              <div className="card-header">
                <h4 className="card-link col-md-5">Jops</h4>
              </div>
              <div>
                <h6 className="card-body">
                  There are no jobs currently. When available, we will announce
                  here and on Linkedin
                </h6>
              </div>
              <div>
                <h6 className="card-body">
                  {" "}
                  Or you can send your CV to the email{" "}
                  <a href="mailto: hr@tetrazones.com">hr@tetrazones.com</a>{" "}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Jops;