import "./HeroImgStyles.css";

import React from 'react'

import IntroImg from "../assets/Me.png"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
  <div className="hero">
        <div className="mask">
        <img className="intro-img" src=
        {IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>Hi, I am a Developer.</p>
            <h1>I develop ServiceNow applications</h1>
            <div>
                <Link to="/project"
                className="btn">Projects</Link>
                <Link to="/contact"
                className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  );
};

export default HeroImg