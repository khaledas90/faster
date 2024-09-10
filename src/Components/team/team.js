import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import ime1 from "../img/team-1.jpg";
import ime2 from "../img/team-2.jpg";
import ime3 from "../img/team-3.jpg";
import ime4 from "../img/team-4.jpg";
export default function team() {
  return (
    <Fragment>
      <div className="team">
        <div className="container-fluid pt-5">
          <div className="container">
            <div className="text-center content pb-2">
              <h6 className=" text-uppercase font-weight-bold">
                Delivery Team
              </h6>
              <h1 className="mb-4">Meet Our Delivery Team</h1>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="team team1 card position-relative overflow-hidden border-0 mb-5">
                  <img className="card-img-top" src={ime1} alt="" />
                  <div className="card-body text-center p-0">
                    <div className="team-text d-flex flex-column justify-content-center ">
                      <h5 className="font-weight-bold">Full Name</h5>
                      <span>Designation</span>
                    </div>
                    <div className="team-social d-flex align-items-center justify-content-center ">
                      <a
                        className="btn btn-outline-dark btn-social mr-2"
                        href="www.twitter.com"
                      >
                        <FontAwesomeIcon className="icon" icon={faTwitter} />
                      </a>
                      <a
                        className="btn btn-outline-dark btn-social mr-2"
                        href="www.facebook.com"
                      >
                        <FontAwesomeIcon className="icon" icon={faFacebook} />
                      </a>
                      <a
                        className="btn btn-outline-dark btn-social mr-2"
                        href="www.linkedin.com"
                      >
                        <FontAwesomeIcon className="icon" icon={faInstagram} />
                      </a>
                      <a
                        className="btn btn-outline-dark btn-social"
                        href="www.instagram.com"
                      >
                        <FontAwesomeIcon className="icon" icon={faLinkedin} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="team team2 card position-relative overflow-hidden border-0 mb-5">
                  <img className="card-img-top" src={ime2} alt="" />
                  <div className="card-body text-center p-0">
                    <div className="team-text d-flex flex-column justify-content-center ">
                      <h5 className="font-weight-bold">Full Name</h5>
                      <span>Designation</span>
                    </div>
                    <div className="team-social d-flex align-items-center justify-content-center ">
                      <a
                        className="btn btn-outline-dark btn-social mr-2"
                        href="www.twitter.com"
                      >
                        <FontAwesomeIcon className="icon" icon={faTwitter} />
                      </a>
                      <a
                        className="btn btn-outline-dark btn-social mr-2"
                        href="www.facebook.com"
                      >
                        <FontAwesomeIcon className="icon" icon={faFacebook} />
                      </a>
                      <a
                        className="btn btn-outline-dark btn-social mr-2"
                        href="www.linkedin.com"
                      >
                        <FontAwesomeIcon className="icon" icon={faInstagram} />
                      </a>
                      <a
                        className="btn btn-outline-dark btn-social"
                        href="www.instagram.com"
                      >
                        <FontAwesomeIcon className="icon" icon={faLinkedin} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="team team3 card position-relative overflow-hidden border-0 mb-5">
                  <img className="card-img-top" src={ime3} alt="" />
                  <div className="card-body text-center p-0">
                    <div className="team-text d-flex flex-column justify-content-center ">
                      <h5 className="font-weight-bold">Full Name</h5>
                      <span>Designation</span>
                    </div>
                    <div className="team-social d-flex align-items-center justify-content-center ">
                      <a
                        className="btn btn-outline-dark btn-social mr-2"
                        href="www.twitter.com"
                      >
                        <FontAwesomeIcon className="icon" icon={faTwitter} />
                      </a>
                      <a
                        className="btn btn-outline-dark btn-social mr-2"
                        href="www.facebook.com"
                      >
                        <FontAwesomeIcon className="icon" icon={faFacebook} />
                      </a>
                      <a
                        className="btn btn-outline-dark btn-social mr-2"
                        href="www.linkedin.com"
                      >
                        <FontAwesomeIcon className="icon" icon={faInstagram} />
                      </a>
                      <a
                        className="btn btn-outline-dark btn-social"
                        href="www.instagram.com"
                      >
                        <FontAwesomeIcon className="icon" icon={faLinkedin} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="team team4 card position-relative overflow-hidden border-0 mb-5">
                  <img className="card-img-top" src={ime4} alt="" />
                  <div className="card-body text-center p-0">
                    <div className="team-text d-flex flex-column justify-content-center ">
                      <h5 className="font-weight-bold">Full Name</h5>
                      <span>Designation</span>
                    </div>
                    <div className="team-social d-flex align-items-center justify-content-center">
                      <a
                        className="btn btn-outline-dark btn-social mr-2"
                        href="www.twitter.com"
                      >
                        <FontAwesomeIcon className="icon" icon={faTwitter} />
                      </a>
                      <a
                        className="btn btn-outline-dark btn-social mr-2"
                        href="www.facebook.com"
                      >
                        <FontAwesomeIcon className="icon" icon={faFacebook} />
                      </a>
                      <a
                        className="btn btn-outline-dark btn-social mr-2"
                        href="www.linkedin.com"
                      >
                        <FontAwesomeIcon className="icon" icon={faInstagram} />
                      </a>
                      <a
                        className="btn btn-outline-dark btn-social"
                        href="www.instagram.com"
                      >
                        <FontAwesomeIcon className="icon" icon={faLinkedin} />
                      </a>
                    </div>
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
