import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = () => {
  return (
    <div id="Cpar">
      <div className="card">
        <div>
          <i class="fa-solid fa-pencil"></i>
        </div>
        <h3>Customized Web Solutions</h3>
        <p>
          We offer tailored web design and development services to meet the
          needs of your business.
        </p>
      </div>
      <div className="card">
        <div>
          <i class="fa-solid fa-laptop"></i>
        </div>
        <h3>Mobile App Development</h3>
        <p>
          We design and develop unique and functional applications to empower
          your business on mobile platforms.
        </p>
      </div>
      <div className="card">
        <div>
          <i class="fa-solid fa-code"></i>
        </div>
        <h3>Technical Support and Maintenance Services</h3>
        <p>
          We provide technical support and maintenance services to ensure the
          smooth operation of your website and applications.
        </p>
      </div>
      <div className="card">
        <div>
          <i class="fa-solid fa-laptop-code"></i>
        </div>
        <h3>Cutting-Edge Frontend Solutions</h3>
        <p>
          We craft immersive and dynamic user experiences through innovative
          frontend development techniques. Harnessing the latest technologies,
          we bring your vision to life with pixel-perfect precision
        </p>
      </div>
      <div>
        <FontAwesomeIcon icon="fa-solid fa-check-square" />
        Your <FontAwesomeIcon icon="fa-regular fa-coffee" /> is hot! Compliments
        of the <FontAwesomeIcon icon="fa-sharp fa-solid fa-hat-chef" />!
      </div>
    </div>
  );
};

export default Card;
