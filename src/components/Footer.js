import "./FooterStyles.css";

import React from 'react';

import {FaFacebook, FaHome, FaLinkedin, FaTwitter, FaPhone, FaMailBulk} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
            <div className="location">
                <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }}/>
                <div>
                    <p>Plot 5&6 Rev Alao's Layout.</p>
                    <p>Nigeria.</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }}/>
                234-803-809-0266</h4>
            </div>
            <div className="email">
                    <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }}/>
                greathtmlsite@gmail.com</h4>
            </div>
            </div>
            <div className="right">
                <h4>About the company</h4>
                <p>We are here to help you solve all ServiceNow related issues.</p>
                <div className="social">
                    <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }}/>
                    <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }}/>
                    <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }}/>
                </div>
                </div>
            </div>
            </div>
  );
};

export default Footer