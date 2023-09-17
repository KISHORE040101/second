import React from "react";
import AboutBackground from "../Assets/img7.png";
import AboutBackgroundImage from "../Assets/img6.png";
// import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Health: Your Wealth of Well-being.
        </h1>
        <p className="primary-text">
        At Nature's Path, our mission is to bring the age-old wisdom of Ayurveda to the forefront and make it accessible to everyone seeking a natural, balanced, and harmonious life. We strive to demystify Ayurveda, making its principles understandable and applicable in today's fast-paced world.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;