import React from "react";
import "./AboutUs.css";
import img1 from "../../assets/img1.jpg"; // Adjusting path to go two directories up
import img2 from "../../assets/img2.jpg";


const AboutUs = () => {
  return (
    <div className="about-us-container">
      
      <div className="images-container">
      <div className="ellipse">
      <svg className="circle" width="40" height="40" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="49" cy="49" r="49" fill="#217BF4" fill-opacity="0.05"/>
</svg>
      <svg className="circle-2" width="100" height="100" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="49" cy="49" r="49" fill="#217BF4" fill-opacity="0.05"/>
</svg>
      

      </div>
      

        <svg
          className="subtract-1"
          width="40"
          height="40"
          viewBox="0 0 83 83"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 83L83 83L83 67.1905L15.2449 67.1905L15.2449 -5.92334e-06L7.25609e-06 -7.25609e-06L0 83Z"
            fill="#F46D21"
          />
        </svg>
        <img src={img1} alt="image1" className="image-item image-item-1" />
        <svg
          className="box"
          width="35"
          height="35"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="72" height="72" fill="#217BF4" />
        </svg>

        <img src={img2} alt="image2" className="image-item image-item-2" />
        <svg
          width="60"
          height="60"
          viewBox="0 0 97 97"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M97 0H0V18.4762H79.1837V97H97V0Z"
            fill="#217BF4"
          />
        </svg>
        <img src={img1} alt="image3" className="image-item image-item-3" />
        <svg className="circle-3" width="40" height="40" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="49" cy="49" r="49" fill="#217BF4" fill-opacity="0.05"/>
</svg>
      <svg className="circle-4" width="100" height="100" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="49" cy="49" r="49" fill="#217BF4" fill-opacity="0.05"/>
</svg>
      </div>
      
      <div className="about-us-content">
        <h2>About Us</h2>
        <svg
          className="under"
          width="188"
          height="12"
          viewBox="0 0 188 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="188" height="12" rx="6" fill="#217BF4" />
        </svg>

        <p>
          Fifteen years of experience in real estate, excellent customer service
          and a commitment to work hard, listen and follow through. We provide
          quality service to build relationships with clients and, more
          importantly, maintain those relationships by communicating
          effectively.
        </p>
        <button className="learn-more-btn">Learn More</button>
      </div>
    </div>
  );
};

export default AboutUs;
