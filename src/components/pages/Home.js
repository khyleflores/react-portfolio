import React from "react";
import "../styles/global.css";
import homeLogo from "../styles/freepik-pikisuperstar.png";


function Home() {
  return (
    <div className ="container">
      <div className="row" >
        <div className="col-lg-6 col-md-6 col-sm-6 sectionHeading">
            <h1><span className="h1Sub3heading">Hello, My Name is</span>
            <br/>Khyle Flores
            <br/><span className="h1Subheading">Front-End Developer</span>
            <br/><span className="h1Sub2heading">#Bootstrap #Node #React #PHP</span></h1>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 imageContainer">
            <img className="img-fluid homePhoto" src={homeLogo} alt="Designed by pikisuperstar / Freepik"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
