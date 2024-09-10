import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "../About/AboutUs";
import GetAQuite from "../GET A QUOTE/GETAQUOTE";
import Services from "../Services/Services";
import WhyUS from "../WhyUS/WhyUs";
import Price from "../price/price";
import Team from "../team/team";
import Testimonials from "../testimonial/testimonial";
import Blog from "../blog/blog";

export default function Home() {
  return (
    <Fragment>
      <div className="jumbotron jumbotron-fluid mb-5">
        <div className="container text-center py-5">
          <h1 className=" mb-4">Safe & Faster</h1>
          <h2 className="text-white display-3 mb-5">Logistics Services</h2>
          <div className="mx-auto containerForm ">
            <div className="input-group mb-5">
              <input
                type="text"
                className="form-control border-light"
                placeholder="Tracking Id"
              />
              <div className="input-group-append">
                <button className="btn btn-primary px-3">Track & Trace</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutUs />
      <GetAQuite />
      <Services />
      <WhyUS />
      <Price />
      <Team />
      <Testimonials />
      <Blog />
    </Fragment>
  );
}
