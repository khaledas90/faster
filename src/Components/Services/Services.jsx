import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faShip,
  faStore,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
export default function Services() {
  return (
    <Fragment>
      <div className="Services">
        <div className="container-fluid pt-5">
          <div className="container">
            <div className="text-center content pb-2">
              <h6 className=" text-uppercase font-weight-bold">Our Services</h6>
              <h1 className="mb-4">Best Logistic Services</h1>
            </div>
            <div className="row pb-3">
              <div className="col-lg-3 col-md-6 card text-center ml-2 mb-5">
                <div className="d-flex align-items-center justify-content-around headCard  mb-4 p-4">
                  <FontAwesomeIcon className="icon" icon={faPhone} />

                  <h6 className="text-white font-weight-medium m-0">
                    Air Freight
                  </h6>
                </div>
                <p>
                  Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet
                  diam sea est diam
                </p>
                <span className="btnService">Read More</span>
              </div>
              <div className="col-lg-3 col-md-6 card text-center ml-2 mb-5">
                <div className="d-flex align-items-center justify-content-around headCard mb-4 p-4">
                  <FontAwesomeIcon className="icon" icon={faShip} />

                  <h6 className="text-white font-weight-medium m-0">
                    Ocean Freight
                  </h6>
                </div>
                <p>
                  Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet
                  diam sea est diam
                </p>
                <span className="btnService">Read More</span>
              </div>
              <div className="col-lg-3 col-md-6 card text-center ml-2 mb-5">
                <div className="d-flex align-items-center justify-content-around headCard mb-4 p-4">
                  <FontAwesomeIcon className="icon" icon={faTruck} />

                  <h6 className="text-white font-weight-medium m-0">
                    Land Transport
                  </h6>
                </div>
                <p>
                  Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet
                  diam sea est diam
                </p>
                <span className=" btnService ">Read More</span>
              </div>
              <div className="col-lg-3 col-md-6 card text-center ml-2 mb-5">
                <div className="d-flex align-items-center justify-content-around headCard mb-4 p-4">
                  <FontAwesomeIcon className="icon pr-3" icon={faStore} />

                  <h6 className="text-white font-weight-medium m-0">
                    Cargo Storage
                  </h6>
                </div>
                <p>
                  Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet
                  diam sea est diam
                </p>
                <span className="btnService">Read More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
