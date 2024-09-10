import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faGlobe,
  faMapMarker,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact(props) {
  return (
    <Fragment>
      <section className=" Contact ContactDetail">
        <div
          className="jumbotron jumbotron-fluid pb-5 mb-5"
          style={{ padding: " 4rem 2rem" }}
        >
          <div className="container text-center py-5">
            <h1 className="text-white display-3">{props.Contact}</h1>
            <div className="d-inline-flex mt-5 align-items-center text-white">
              <p className="m-0">
                {" "}
                <Link exact="true" className="LinkDetailPage" to="/">
                  Home
                </Link>
              </p>
              <FontAwesomeIcon
                className="icon iconDetailPage"
                icon={faCircle}
              />
              <p className="m-0 ">{props.Contact}</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12">
              <div className="wrapper">
                <div className="row no-gutters">
                  <div className="col-md-7 d-flex align-items-stretch">
                    <div className="contact-wrap w-100 p-md-5 p-4">
                      <h3 className="mb-4">Get in touch</h3>
                      <div id="form-message-warning" className="mb-4"></div>
                      <div id="form-message-success" className="mb-4">
                        Your message was sent, thank you!
                      </div>
                      <form method="POST" id="contactForm" name="contactForm">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="name"
                                id="name"
                                placeholder="Name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea
                                name="message"
                                className="form-control"
                                id="message"
                                cols="30"
                                rows="7"
                                placeholder="Message"
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="submit"
                                value="Send Message"
                                className="btn btn-primary btnContact"
                              />
                              <div className="submitting"></div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-5 d-flex align-items-stretch">
                    <div className="info-wrap bg-primary w-100 p-lg-5 p-4">
                      <h3 className="mb-4 mt-md-4">Contact us</h3>
                      <div className="dbox w-100 d-flex align-items-start">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <FontAwesomeIcon
                            className="icon "
                            icon={faMapMarker}
                          />
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Address:</span> 198 West 21th Street, Suite
                            721 New York NY 10016
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <FontAwesomeIcon className="icon " icon={faPhone} />
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Phone:</span>{" "}
                            <a href="tel://1234567920">+201090898650</a>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <FontAwesomeIcon
                            className="icon "
                            icon={faPaperPlane}
                          />
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Email:</span>{" "}
                            <a href="mailto:info@yoursite.com">
                              info@khaled.com
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <FontAwesomeIcon className="icon " icon={faGlobe} />
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Website</span>{" "}
                            <a href="www.khaled@gmail.com">faster.com</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
