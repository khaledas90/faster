import React, { Component, Fragment } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYahoo,
} from "@fortawesome/free-brands-svg-icons";

class Header extends Component {
  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="dis-flex parentHead ">
            <div>
              <span>
                <FontAwesomeIcon className="icon" icon={faPhone} />
                +201090898650
              </span>

              <span className="ml-4">
                <FontAwesomeIcon className="icon" icon={faEnvelope} />
                khaled@gmail.com
              </span>
            </div>
            <div lg={6} className="text-end">
              <span className="ml-4">
                <FontAwesomeIcon className="icon iconBrand" icon={faFacebook} />
                <FontAwesomeIcon className="icon iconBrand" icon={faTwitter} />
                <FontAwesomeIcon className="icon iconBrand" icon={faYahoo} />
                <FontAwesomeIcon className="icon iconBrand" icon={faLinkedin} />
                <FontAwesomeIcon
                  className="icon iconBrand"
                  icon={faInstagram}
                />
              </span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Header;
