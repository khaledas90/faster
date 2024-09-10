import React, { Fragment, useState } from "react";
import imgAbout from "../img/about.jpg";
import Modal from "react-bootstrap/Modal";
import vedioAbout from "../img/vedioAbout.mp4";

export default function AboutUs() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <div className="aboutUs">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 pb-4 pb-lg-0">
              <img className="img-fluid w-100" src={imgAbout} alt="About Us" />
              <div className="imgText text-center p-4">
                <h3 className="m-0">25+ Years Experience</h3>
              </div>
            </div>
            <div className="col-lg-7 content">
              <h6 className="text-uppercase font-weight-bold">About Us</h6>
              <h1 className="mb-4">
                Trusted & Faster Logistic Service Provider
              </h1>
              <p className="mb-4">
                Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam
                dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr
                stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat
                sed diam duo
              </p>
              <div className="d-flex align-items-center justify-content-start pt-2">
                <button
                  type="button"
                  onClick={handleShow}
                  className="btn-play ml-3"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <span></span> {/* Added play icon */}
                </button>
                <h5 className="font-weight-bold m-0 ml-4 mr-3 btn-text">
                  Play Video
                </h5>
              </div>
            </div>
          </div>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Trusted & Faster</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <video src={vedioAbout} controls className="w-100" />
          </Modal.Body>
        </Modal>
      </div>
    </Fragment>
  );
}
