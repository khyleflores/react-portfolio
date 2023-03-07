import React from "react";
import "../styles/global.css";
import "../styles/home.css";
import homeLogo from "../styles/freepik-pikisuperstar.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faTwitterSquare, faGithubSquare} from '@fortawesome/free-brands-svg-icons';


function Home() {
  return (
    <div className ="container">
      <div className="row" >
        <div className="col-lg-6 col-md-6 col-sm-6 sectionHeading">
            <h1>
            <span className="h1Subheading">Hello, My Name is</span>
            <br/><span className="h1Sub1heading">Khyle Flores</span>
            <br/><span className="h1Sub2heading">Front-End Developer</span>
            <br/><span className="h1Sub3heading">#Bootstrap #Node #React #PHP</span>
            <br/><span className="h1SubIcons"><a target="_blank" href="https://www.linkedin.com/in/khyle-flores-2478a7b5/"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a target="_blank" href="https://twitter.com/KhyleFlores10"><FontAwesomeIcon icon={faTwitterSquare} /></a>
            <a target="_blank" href="https://github.com/khyleflores"><FontAwesomeIcon icon={faGithubSquare} /></a>
            </span>
            </h1>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 imageContainer">
            <img className="img-fluid homePhoto" src={homeLogo} alt="Designed by pikisuperstar / Freepik"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
