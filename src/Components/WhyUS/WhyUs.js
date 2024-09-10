import React, { Fragment } from "react";
import featureImg from "../img/feature.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
export default function WhyUs() {
  return (
    <Fragment>
      <div className="WhyUs">
        <div className="container-fluid  my-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <img className="img-fluid w-100" src={featureImg} alt="" />
              </div>
              <div className="col-lg-7 py-5 py-lg-0">
                <div className="content">
                  <h6 className=" text-uppercase font-weight-bold">
                    Why Choose Us
                  </h6>
                  <h1 className="mb-4">
                    Faster, Safe and Trusted Logistics Services
                  </h1>
                  <p className="mb-4">
                    Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam
                    dolore sed et. Sit rebum labore sit sit ut vero no sit. Et
                    elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo
                    eos et erat sed diam duo
                  </p>
                </div>
                <ul className="list-inline">
                  <li>
                    <h6>
                      <FontAwesomeIcon className="icon" icon={faDotCircle} />
                      Best In Industry
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <FontAwesomeIcon className="icon" icon={faDotCircle} />
                      Emergency Services
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <FontAwesomeIcon className="icon" icon={faDotCircle} />
                      24/7 Customer Support
                    </h6>
                  </li>
                </ul>
                <a
                  href="www.khaled.com"
                  className="btn btn-primary btnWhyUs mt-3 py-2 px-4"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
