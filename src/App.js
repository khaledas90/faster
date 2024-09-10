import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/header/Navebar";
import Footer from "./Components/footer/footer";
import Home from "./Components/Home/Home";
// import AboutUs from "./Components/About/AboutUs";
import GetAQuite from "./Components/GET A QUOTE/GETAQUOTE";
// import Services from "./Components/Services/Services";
// import Price from "./Components/price/price";
import NotFound from "./Components/NotFound/NotFound";
import AboutDetail from "./Components/About/AboutDetail";
import ServicesDetail from "./Components/Services/ServicesDetail";
import PriceDetail from "./Components/price/PriceDetail";
import Contact from "./Components/Contact/Contact";
import LatestBlog from "./Components/blog/LatestBlog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";

function App() {
  const state = {
    about: "About",
    Service: "Service",
    Price: "Price",
    Contact: "Contact",
    LatestBlog: "Latest Blog",
  };
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop >= 30) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/AboutUs"
            element={<AboutDetail about={state.about} />}
          />
          <Route exact path="/GetAQuite" element={<GetAQuite />} />
          <Route
            exact
            path="/Services"
            element={<ServicesDetail Service={state.Service} />}
          />
          <Route
            exact
            path="/Price"
            element={<PriceDetail Price={state.Price} />}
          />
          <Route
            exact
            path="/Contact"
            element={<Contact Contact={state.Contact} />}
          />
          <Route
            exact
            path="/LatestBlog"
            element={<LatestBlog LatestBlog={state.LatestBlog} />}
          />
          <Route exact path="/NotFound" element={<NotFound />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        {scrollTop && (
          <button
            onClick={scrollToTop}
            className="btn btn-lg btn-primary back-to-top"
          >
            <FontAwesomeIcon className="icon" icon={faAngleDoubleUp} />
          </button>
        )}
      </div>
    </Router>
  );
}

export default App;
