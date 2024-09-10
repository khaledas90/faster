import React, { Fragment } from "react";

export default function price() {
  return (
    <Fragment>
      <div className="price">
        <div className="container-fluid pt-5">
          <div className="container">
            <div className="text-center content pb-2">
              <h6 className=" text-uppercase font-weight-bold">Pricing Plan</h6>
              <h1 className="mb-4">Affordable Pricing Packages</h1>
            </div>
            <div className="row">
              <div className="col-md-4 mb-5">
                <div className="price-card">
                  <div className="text-center p-4">
                    <h1 className="display-4 mb-0">
                      <small className="align-top  text-muted font-weight-medium">
                        $
                      </small>
                      49
                      <small className="align-bottom text-muted font-weight-medium">
                        /Mo
                      </small>
                    </h1>
                  </div>
                  <div className="plan text-center p-4">
                    <h3 className="m-0">Basic</h3>
                  </div>
                  <div className="d-flex flex-column align-items-center py-4">
                    <p>HTML5 & CSS3</p>
                    <p>Bootstrap 4</p>
                    <p>Responsive Layout</p>
                    <p>Compatible With All Browsers</p>
                    <a
                      href="www.khaled.com"
                      className="btn btn-primary btnPrice py-2 px-4 my-2"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <div className="price-card">
                  <div className="text-center p-4">
                    <h1 className="display-4 mb-0">
                      <small className="align-top text-muted font-weight-medium">
                        $
                      </small>
                      99
                      <small className="align-bottom text-muted font-weight-medium">
                        /Mo
                      </small>
                    </h1>
                  </div>
                  <div className="plan text-center p-4">
                    <h3 className="m-0">Premium</h3>
                  </div>
                  <div className="d-flex flex-column align-items-center py-4">
                    <p>HTML5 & CSS3</p>
                    <p>Bootstrap 4</p>
                    <p>Responsive Layout</p>
                    <p>Compatible With All Browsers</p>
                    <a
                      href="www.khaled.com"
                      className="btn btn-primary btnPrice py-2 px-4 my-2"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <div className="price-card">
                  <div className="text-center p-4">
                    <h1 className="display-4 mb-0">
                      <small className="align-top text-muted font-weight-medium">
                        $
                      </small>
                      149
                      <small className="align-bottom text-muted font-weight-medium">
                        /Mo
                      </small>
                    </h1>
                  </div>
                  <div className="plan text-center p-4">
                    <h3 className="m-0">Business</h3>
                  </div>
                  <div className="d-flex flex-column align-items-center py-4">
                    <p>HTML5 & CSS3</p>
                    <p>Bootstrap 4</p>
                    <p>Responsive Layout</p>
                    <p>Compatible With All Browsers</p>
                    <a
                      href="www.khaled.com"
                      className="btn btn-primary btnPrice py-2 px-4 my-2"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
