import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../img/testimonial-1.jpg";
import img2 from "../img/testimonial-2.jpg";
import img3 from "../img/testimonial-3.jpg";
import img4 from "../img/testimonial-4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  const [activeSlide, setActiveSlide] = React.useState(0);

  const testimonials = [
    {
      img: img1,
      name: "Client Name",
      profession: "Profession",
      text: "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr clita lorem. Dolor ipsum sanct clita",
    },
    {
      img: img2,
      name: "Client Name",
      profession: "Profession",
      text: "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr clita lorem. Dolor ipsum sanct clita",
    },
    {
      img: img3,
      name: "Client Name",
      profession: "Profession",
      text: "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr clita lorem. Dolor ipsum sanct clita",
    },
    {
      img: img4,
      name: "Client Name",
      profession: "Profession",
      text: "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr clita lorem. Dolor ipsum sanct clita",
    },
  ];

  return (
    <div className="testimonial">
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center content pb-2">
            <h6 className="text-uppercase font-weight-bold">Testimonial</h6>
            <h1 className="mb-4">Our Clients Say</h1>
          </div>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-item ${
                  index === activeSlide ? "active" : ""
                }`}
              >
                <div className="position-relative testimonialMain p-4">
                  <FontAwesomeIcon className="icon" icon={faQuoteRight} />
                  <div className="d-flex align-items-center mb-3">
                    <img
                      className="img-fluid rounded-circle"
                      src={testimonial.img}
                      style={{ width: "60px", height: "60px" }}
                      alt=""
                    />
                    <div className="ml-3">
                      <h6 className="font-weight-semi-bold m-0">
                        {testimonial.name}
                      </h6>
                      <small>- {testimonial.profession}</small>
                    </div>
                  </div>
                  <p className="m-0">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
