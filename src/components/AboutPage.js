import React from 'react';
import "../style/AboutPage.css"
import mapImg from "../asset/me.JPG"

function AboutPage(){
    return(
        <div class='aboutme row mx-auto '>
          <div class="col-lg-6 container about text-center">
              <img class="img" src={mapImg} alt="" />
          </div>
          <div class="col-lg-6 container about text-center">
              <h2 class="aboutHeading">ABOUT ME</h2>
              <p class="para">Hi! I'm a web developer actively seeking for opportunity to work in a challenging and responsibility-driven environment under little supervision,aspire to make your company successful and make your customers happier.</p>
              <p class="para">Besides coding ,I like to spend my time learning new technology</p>
          </div>
        </div>
 )
}
export default AboutPage;
