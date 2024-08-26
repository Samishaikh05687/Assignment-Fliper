import React from 'react';
import './WhyChooseUs.css'; // Import the CSS file for styling
import circle1 from "../../assets/circle.svg";
import circle2 from "../../assets/circle2.svg";
import circle3 from "../../assets/circle3.svg";

const WhyChooseUs = () => {
  return (
    <div className="main">
    <div className="realtor-section">
        <svg className='semi' width="261" height="665" viewBox="0 0 261 565" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="-21.5" cy="282.5" r="277.5" stroke="#217BF4" stroke-opacity="0.07" stroke-width="10"/>
</svg>
      <div className="text-content">
        <h2>Not Your Average Realtor</h2>
        <p>
          Your search for a top-tier agent ends here. With a solid commitment to client satisfaction and a proven track record, we strive to achieve exceptional results for every individual we represent.
        </p>
      </div>
      <div className="image-content">
        <div className="image-circle">
          <img src={circle1} alt="Realtor Image 1" />
        </div>
        <div className="image-circle-1 small">
          <img src={circle2} alt="Realtor Image 2" />
        </div>
        <div className="image-circle-2 small">
          <img src={circle3} alt="Realtor Image 3" />
        </div>
      </div>
      <div className="background-shapes">
        <div className="shape blue-circle"></div>
        <div className="shape orange-circle"></div>
        <div className="shape light-circle"></div>
        {/* Add more shapes as needed */}
      </div>
    </div>
    
    {/* WHY CHOOSE SECTION */}
    
    <div className="why-choose-us-container">
      <h2>Why Choose Us?</h2>
      <svg
          className="under"
          width="300"
          height="10"
          viewBox="0 0 188 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="200" height="12" rx="6" fill="#217BF4" />
        </svg>
      <div className="features">
        <div className="feature">
          <div className="icon-container">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.25 18.75L25 4.16666L43.75 18.75V41.6667C43.75 42.7717 43.311 43.8315 42.5296 44.6129C41.7482 45.3943 40.6884 45.8333 39.5833 45.8333H10.4167C9.3116 45.8333 8.25179 45.3943 7.47039 44.6129C6.68899 43.8315 6.25 42.7717 6.25 41.6667V18.75Z" stroke="#217BF4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.75 45.8333V25H31.25V45.8333" stroke="#217BF4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </div>
          <h3>Potential ROI</h3>
          <p>
            Whether you are looking to buy a new home or refinance your current home loan, we will work to ensure you get the best value for your investment.
          </p>
        </div>

        <div className="feature">
          <div className="icon-container">
            {/* Icon for Design (replace with an actual icon as needed) */}
            <svg className="feature-icon" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.1665 41.4583V33.3333H35.4165C36.5216 33.3333 37.5814 32.8943 38.3628 32.1129C39.1442 31.3315 39.5832 30.2717 39.5832 29.1667V25H10.4165V29.1667C10.4165 31.4583 12.2915 33.3333 14.5832 33.3333H20.8332V41.4583C20.8332 42.5634 21.2722 43.6232 22.0536 44.4046C22.835 45.186 23.8948 45.625 24.9998 45.625C26.1049 45.625 27.1647 45.186 27.9461 44.4046C28.7275 43.6232 29.1665 42.5634 29.1665 41.4583Z" stroke="#217BF4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 25V4.16666H37.5V25" stroke="#217BF4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29.1665 4.16666V12.5" stroke="#217BF4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.8335 4.16666V8.33332" stroke="#217BF4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </div>
          <h3>Design</h3>
          <p>
            Our team of design experts will guide you through the process and ensure that the final design meets your expectations.
          </p>
        </div>

        <div className="feature">
          <div className="icon-container">
            {/* Icon for Marketing (replace with an actual icon as needed) */}
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.9998 45.8333C36.5058 45.8333 45.8332 36.5059 45.8332 25C45.8332 13.4941 36.5058 4.16666 24.9998 4.16666C13.4939 4.16666 4.1665 13.4941 4.1665 25C4.1665 36.5059 13.4939 45.8333 24.9998 45.8333Z" stroke="#217BF4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M33.3332 16.6667H20.8332C19.7281 16.6667 18.6683 17.1056 17.8869 17.887C17.1055 18.6684 16.6665 19.7283 16.6665 20.8333C16.6665 21.9384 17.1055 22.9982 17.8869 23.7796C18.6683 24.561 19.7281 25 20.8332 25H29.1665C30.2716 25 31.3314 25.439 32.1128 26.2204C32.8942 27.0018 33.3332 28.0616 33.3332 29.1667C33.3332 30.2717 32.8942 31.3315 32.1128 32.1129C31.3314 32.8943 30.2716 33.3333 29.1665 33.3333H16.6665" stroke="#217BF4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25 37.5V12.5" stroke="#217BF4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


          </div>
          <h3>Marketing</h3>
          <p>
            Our marketing team will create a strategy that maximizes your business's potential through targeted and effective campaigns.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default WhyChooseUs;
