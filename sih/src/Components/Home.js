import React from "react";
import BannerBackground from "../Assets/img8.png";
import BannerImage from "../Assets/img2.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            Unlocking Health with Ayurvedic Insights.
          </h1>
          <p className="primary-text">
            Let Ayurveda be your compass, guiding you towards a life of
            wellness, balance, and joy.
          </p>
          <button className="secondary-button" onClick={() => { /* Handle button click here */ }}>
            Register Now <FiArrowRight />
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
      <div className="home-bannerImage-container">
        <img src={BannerBackground} alt="" />
      </div>
    </div>
  );
};

export default Home;
