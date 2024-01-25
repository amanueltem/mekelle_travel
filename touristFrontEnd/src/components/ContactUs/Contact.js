import React from "react";
import "./contact.css"; // Make sure to replace with your actual CSS file
import url1 from "./gmail.jpg"; // Replace with the actual path to your image1
import url2 from "./phone.png"; // Replace with the actual path to your image2
import { NavLink } from "react-router-dom";

const Contact = () => {
  const phoneNumber = "+251900000001"; // Replace with your actual phone number
  const emailAddress = "MekTour@gmail.com";
  return (
    <div style={{ marginLeft: "5%", marginRight: "5%" }}>
      <div className="contact-container">
        <h1 className="contact">
          If you want to contact Mekelle Tour Agency system you can use the
          following.
        </h1>
        <h1>
          <img src={url1} alt="Phone Icon" className="icon" />
          Phone: <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
        </h1>
        <h1>
          <img src={url2} alt="Email Icon" className="icon" />
          Email: <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
        </h1>
      </div>
    </div>
  );
};

export default Contact;
