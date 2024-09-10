import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import AboutUs from "./AboutUs";
import WhyUs from "../WhyUS/WhyUs";
import Team from "../team/team";
export default function AboutDetail(props) {
  return (
    <Fragment>
      <div className="aboutUs AboutDetail">
        <div
          className="jumbotron jumbotron-fluid pb-5 mb-5"
          style={{ padding: " 4rem 2rem" }}
        >
          <div className="container text-center py-5">
            <h1 className="text-white display-3">{props.about}</h1>
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
              <p className="m-0 ">{props.about}</p>
            </div>
          </div>
        </div>
        <div className="container">
          <AboutUs />
          <WhyUs />
          <Team />
        </div>
      </div>
    </Fragment>
  );
}
