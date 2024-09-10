import React, { Fragment } from "react";
import img1 from "../img/blog-1.jpg";
import img2 from "../img/blog-2.jpg";
import imgUser from "../img/user.jpg";
export default function Blog() {
  return (
    <Fragment>
      <div className="Blog">
        <div className="container-fluid pt-5">
          <div className="container">
            <div className="text-center content pb-2">
              <h6 className=" text-uppercase font-weight-bold">Our Blog</h6>
              <h1 className="mb-4">Latest From Blog</h1>
            </div>
            <div className="row">
              <div className="col-md-6 mb-5">
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
              <div className="col-md-6 mb-5">
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
          </div>
        </div>
      </div>
    </Fragment>
  );
}
