import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faCircle,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import img1 from "../img/blog-1.jpg";
import img2 from "../img/blog-2.jpg";
import imgUser from "../img/user.jpg";
export default function LastBlog(props) {
  return (
    <Fragment>
      <div className="BlogLatest ">
        <div
          className="jumbotron jumbotron-fluid pb-5 mb-5"
          style={{ padding: " 4rem 2rem" }}
        >
          <div className="container text-center py-5">
            <h1 className="text-white display-3">{props.LatestBlog}</h1>
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
              <p className="m-0 ">{props.LatestBlog}</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 Blog">
              <div className="col-md-12 mb-5">
                <div className="position-relative">
                  <img className="img-fluid w-100" src={img1} alt="" />
                  <div className="position-absolute dateblog d-flex flex-column align-items-center justify-content-center rounded-circle">
                    <h4 className="font-weight-bold mb-n1">01</h4>
                    <small className="text-white text-uppercase">Jan</small>
                  </div>
                </div>
                <div className="bodyBlog">
                  <div className="d-flex justify-content-flex-start p-2 mb-3">
                    <div className="d-flex align-items-center ">
                      <img
                        className="rounded-circle imguser"
                        src={imgUser}
                        alt=""
                      />
                      <a
                        className="text-muted linkuser ml-2"
                        href="www.khaled.com"
                      >
                        John Doe
                      </a>
                    </div>
                    <div className="d-flex align-items-center ml-4">
                      <a
                        className="text-muted linkDesign ml-2"
                        href="www.khaled.com"
                      >
                        Web Design
                      </a>
                    </div>
                  </div>
                  <h4 className="font-weight-bold mb-3 titleBlog">
                    Kasd tempor diam sea justo dolor
                  </h4>
                  <p className="pragBlog">
                    Dolor sea ipsum ipsum et. Erat duo lorem magna vero dolor
                    dolores. Rebum eirmod no dolor diam dolor amet ipsum. Lorem
                    lorem sea sed diam est lorem magna
                  </p>
                  <a
                    className="border-bottom border-primary text-uppercase btnBlog text-decoration-none"
                    href="www.khaled.com"
                  >
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-md-12 mb-5">
                <div className="position-relative">
                  <img className="img-fluid w-100" src={img2} alt="" />
                  <div className="position-absolute  dateblog d-flex flex-column align-items-center justify-content-center rounded-circle">
                    <h4 className="font-weight-bold mb-n1">01</h4>
                    <small className="text-white text-uppercase">Jan</small>
                  </div>
                </div>
                <div className="bodyBlog">
                  <div className="d-flex justify-content-flex-start p-2 mb-3">
                    <div className="d-flex align-items-center  ">
                      <img
                        className="rounded-circle imguser"
                        src={imgUser}
                        alt=""
                      />
                      <a
                        className="text-muted ml-2  linkuser"
                        href="www.khaled.com"
                      >
                        John Doe
                      </a>
                    </div>
                    <div className="d-flex align-items-center ml-4">
                      <a
                        className="text-muted linkDesign ml-2"
                        href="www.khaled.com"
                      >
                        Web Design
                      </a>
                    </div>
                  </div>
                  <h4 className="font-weight-bold titleBlog mb-3">
                    Kasd tempor diam sea justo dolor
                  </h4>
                  <p className="pragBlog">
                    Dolor sea ipsum ipsum et. Erat duo lorem magna vero dolor
                    dolores. Rebum eirmod no dolor diam dolor amet ipsum. Lorem
                    lorem sea sed diam est lorem magna
                  </p>
                  <a
                    className="border-bottom border-primary btnBlog text-uppercase text-decoration-none"
                    href="www.khaled.com"
                  >
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-md-12 mb-5">
                <div className="position-relative">
                  <img className="img-fluid w-100" src={img2} alt="" />
                  <div className="position-absolute  dateblog d-flex flex-column align-items-center justify-content-center rounded-circle">
                    <h4 className="font-weight-bold mb-n1">01</h4>
                    <small className="text-white text-uppercase">Jan</small>
                  </div>
                </div>
                <div className="bodyBlog">
                  <div className="d-flex justify-content-flex-start p-2 mb-3">
                    <div className="d-flex align-items-center  ">
                      <img
                        className="rounded-circle imguser"
                        src={imgUser}
                        alt=""
                      />
                      <a
                        className="text-muted ml-2  linkuser"
                        href="www.khaled.com"
                      >
                        John Doe
                      </a>
                    </div>
                    <div className="d-flex align-items-center ml-4">
                      <a
                        className="text-muted linkDesign ml-2"
                        href="www.khaled.com"
                      >
                        Web Design
                      </a>
                    </div>
                  </div>
                  <h4 className="font-weight-bold titleBlog mb-3">
                    Kasd tempor diam sea justo dolor
                  </h4>
                  <p className="pragBlog">
                    Dolor sea ipsum ipsum et. Erat duo lorem magna vero dolor
                    dolores. Rebum eirmod no dolor diam dolor amet ipsum. Lorem
                    lorem sea sed diam est lorem magna
                  </p>
                  <a
                    className="border-bottom border-primary btnBlog text-uppercase text-decoration-none"
                    href="www.khaled.com"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="col-lg-12 mt-5 mt-lg-0">
                <div className="mb-5">
                  <div className="contentBox" style={{ padding: "30px" }}>
                    <div className="input-group">
                      <input
                        type="text"
                        class="form-control inputblog border-0 p-3"
                        placeholder="Keyword"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text  text-white">
                          <FontAwesomeIcon
                            className="icon iconDetailPage"
                            icon={faSearch}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <h3 className="mb-4">Categories</h3>
                  <div className="contentBox" style={{ padding: "30px" }}>
                    <ul className="list-inline  m-0">
                      <li className="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                        <a className="text-dark" href="www.khaled.com">
                          {" "}
                          <FontAwesomeIcon
                            className="icon iconDetailBlog"
                            icon={faAngleRight}
                          />
                          Web Design
                        </a>
                        <span className="badge text-danger badge-secondary badge-pill">
                          150
                        </span>
                      </li>
                      <li className="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                        <a className="text-dark" href="www.khaled.com">
                          <FontAwesomeIcon
                            className="icon iconDetailBlog"
                            icon={faAngleRight}
                          />
                          Web Development
                        </a>
                        <span className="badge text-dark badge-secondary badge-pill">
                          131
                        </span>
                      </li>
                      <li className="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                        <a className="text-dark" href="www.khaled.com">
                          <FontAwesomeIcon
                            className="icon iconDetailBlog"
                            icon={faAngleRight}
                          />
                          Online Marketing
                        </a>
                        <span className="badge  text-danger text-dark  badge-secondary badge-pill">
                          78
                        </span>
                      </li>
                      <li className="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                        <a className="text-dark" href="www.khaled.com">
                          <FontAwesomeIcon
                            className="icon iconDetailBlog"
                            icon={faAngleRight}
                          />
                          Keyword Research
                        </a>
                        <span className="badge text-danger badge-secondary badge-pill">
                          56
                        </span>
                      </li>
                      <li className="py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                        <a className="text-dark" href="www.khaled.com">
                          <FontAwesomeIcon
                            className="icon iconDetailBlog"
                            icon={faAngleRight}
                          />
                          Email Marketing
                        </a>
                        <span className="badge text-dark  badge-secondary badge-pill">
                          98
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mb-5">
                  <h3 className="mb-4">Recent Post</h3>
                  <div className="d-flex mb-3">
                    <img
                      className="img-fluid"
                      src={img1}
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                      }}
                      alt=""
                    />
                    <a
                      href="www.khaled.com"
                      className="d-flex align-items-center bg-Links text-dark text-decoration-none px-3"
                      style={{ height: "80px" }}
                    >
                      Lorem ipsum dolor sit amet consec adipis elit
                    </a>
                  </div>
                  <div className="d-flex mb-3">
                    <img
                      className="img-fluid"
                      src={img2}
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                      }}
                      alt=""
                    />
                    <a
                      href="www.khaled.com"
                      class="d-flex align-items-center bg-Links text-dark text-decoration-none px-3"
                      style={{ height: "80px" }}
                    >
                      Lorem className dolor sit amet consec adipis elit
                    </a>
                  </div>
                  <div className="d-flex mb-3">
                    <img
                      className="img-fluid"
                      src={img1}
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                      }}
                      alt=""
                    />
                    <a
                      href="www.khaled.com"
                      className="d-flex align-items-center bg-Links text-dark text-decoration-none px-3"
                      style={{ height: "80px" }}
                    >
                      Lorem ipsum dolor sit amet consec adipis elit
                    </a>
                  </div>
                  <div className="d-flex mb-3">
                    <img
                      className="img-fluid"
                      src={img2}
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                      }}
                      alt=""
                    />
                    <a
                      href="www.khaled.com"
                      className="d-flex align-items-center bg-Links text-dark text-decoration-none px-3"
                      style={{ height: "80px" }}
                    >
                      Lorem ipsum dolor sit amet consec adipis elit
                    </a>
                  </div>
                  <div className="d-flex mb-3">
                    <img
                      className="img-fluid"
                      src={img1}
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                      }}
                      alt=""
                    />
                    <a
                      href="www.khaled.com"
                      className="d-flex align-items-center bg-Links text-dark text-decoration-none px-3"
                      style={{ height: "80px" }}
                    >
                      Lorem ipsum dolor sit amet consec adipis elit
                    </a>
                  </div>
                </div>
                <div className="mb-5">
                  <img src={img1} alt="" className="img-fluid" />
                </div>
                <div className="mb-5">
                  <h3 className="mb-4">Tag Cloud</h3>
                  <div className="d-flex CloudBlog flex-wrap m-n1">
                    <a href="www.khaled.com" className="btn btn-secondary m-1">
                      Design
                    </a>
                    <a href="www.khaled.com" className="btn btn-secondary m-1">
                      Development
                    </a>
                    <a href="www.khaled.com" className="btn btn-secondary m-1">
                      Marketing
                    </a>
                    <a href="www.khaled.com" className="btn btn-secondary m-1">
                      SEO
                    </a>
                    <a href="www.khaled.com" className="btn btn-secondary m-1">
                      Writing
                    </a>
                    <a href="www.khaled.com" className="btn btn-secondary m-1">
                      Consulting
                    </a>
                  </div>
                </div>
                <div className="mb-5">
                  <img src={img2} alt="" className="img-fluid" />
                </div>
                <div>
                  <h3 className="mb-4">Plain Text</h3>
                  <div className="contentBox p-4 text-center">
                    <p>
                      Vero sea et accusam justo dolor accusam lorem consetetur,
                      dolores sit amet sit dolor clita kasd justo, diam accusam
                      no sea ut tempor magna takimata, amet sit et diam dolor
                      ipsum amet diam
                    </p>
                    <a href="www.khaled.com" className="btnBlogLast py-2 px-4">
                      Read More
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
