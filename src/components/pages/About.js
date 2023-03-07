import React from "react";
import "../styles/global.css";
import "../styles/about.css";
import aboutPhoto from "../styles/images/my-photo-1.png";

function About() {
    return (
        <div className ="container">
          <div className="row" >
            <div className="col-12 text-center sectionTitle">
                <h1>About <span className="whiteFont">Me</span></h1>
            </div>
            <div className="col-lg-6 imageContainer">
                <img className="img-fluid rounded" src={aboutPhoto} alt="Khyle Flores' photo/woman wearing white blazer, black top and white trouser"></img>
            </div>
          </div>
        </div>
      );
}

export default About;