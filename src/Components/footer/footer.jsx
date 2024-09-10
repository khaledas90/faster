import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faYahoo,
} from "@fortawesome/free-brands-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container-fluid text-white mt-5 py-5 px-sm-3 px-md-5">
          <div className="row pt-5">
            <div className="col-lg-7 col-md-6">
              <div className="row">
                <div className="col-md-6 mb-5">
                  <h3 className="titleFooter mb-4">Get In Touch</h3>
                  <p>
                    <i className="fa fa-map-marker-alt mr-2"></i>123 Street, New
                    York, USA
                  </p>
                  <p>
                    <i className="fa fa-phone-alt mr-2"></i>+01090898650
                  </p>
                  <p>
                    <i className="fa fa-envelope mr-2"></i>khaledah826@gmail.com
                  </p>
                  <div className="d-flex justify-content-start mt-4">
                    <FontAwesomeIcon
                      className="icon iconBrand"
                      icon={faFacebook}
                    />
                    <FontAwesomeIcon
                      className="icon iconBrand"
                      icon={faTwitter}
                    />
                    <FontAwesomeIcon
                      className="icon iconBrand"
                      icon={faYahoo}
                    />
                    <FontAwesomeIcon
                      className="icon iconBrand "
                      icon={faLinkedin}
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-5 Links">
                  <h3 className="titleFooter mb-4">Quick Links</h3>
                  <div className="d-flex flex-column justify-content-start">
                    <a className="text-white mb-2" href="https://khaled.com">
                      <FontAwesomeIcon
                        className="icon iconLink "
                        icon={faAngleRight}
                      />
                      Home
                    </a>
                    <a className="text-white mb-2" href="https://khaled.com">
                      <FontAwesomeIcon
                        className="icon iconLink "
                        icon={faAngleRight}
                      />
                      About Us
                    </a>
                    <a className="text-white mb-2" href="https://khaled.com">
                      <FontAwesomeIcon
                        className="icon iconLink "
                        icon={faAngleRight}
                      />
                      Our Services
                    </a>
                    <a className="text-white mb-2" href="https://khaled.com">
                      <FontAwesomeIcon
                        className="icon iconLink "
                        icon={faAngleRight}
                      />
                      Pricing Plan
                    </a>
                    <a className="text-white" href="https://khaled.com">
                      <FontAwesomeIcon
                        className="icon  iconLink"
                        icon={faAngleRight}
                      />
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 mb-5">
              <h3 className="titleFooter mb-4">Newsletter</h3>
              <p>
                Rebum labore lorem dolores kasd est, et ipsum amet et at kasd,
                ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor
                duo eirmod sea justo no lorem est diam
              </p>
              <div className="w-100">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control border-light"
                    placeholder="Your Email Address"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary px-4">Sign Up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid  text-white border-top py-4 px-sm-3 px-md-5">
          <div className="row">
            <div className="col-lg-6 text-center copyWright text-md-left mb-3 mb-md-0">
              <p className="m-0 text-white">
                &copy; <a href="https://khaled.com">Faster</a>. All Rights
                Reserved.
                <a href="https://github.com/khaledas90/">Khaled Ahmed</a>
              </p>
            </div>
            <div className="col-lg-6 text-center text-md-right">
              <ul className="nav d-inline-flex">
                <li className="nav-item">
                  <a
                    className="nav-link text-white py-0"
                    href="https://khaled.com"
                  >
                    Privacy
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white py-0"
                    href="https://khaled.com"
                  >
                    Terms
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white py-0"
                    href="https://khaled.com"
                  >
                    FAQs
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white py-0"
                    href="https://khaled.com"
                  >
                    Help
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
