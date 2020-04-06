import React from 'react';
import "../style/AboutPage.css"

function AboutPage(){
    return(
        <div class='aboutme row mx-auto '>
          <div class="col-lg-6 container about text-center">
              <img class="img" src="https://i.pinimg.com/736x/46/6e/40/466e408179c1516b31154a897e3417bc.jpg" alt="" />
          </div>
          <div class="col-lg-6 container about text-center">
             <div class="aboutheart" id="aboutheart">
               <i class="fa fa-heart" aria-hidden="true"></i>
             </div>
              <h2 class="aboutHeading">about me</h2>
              <p class="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, perferendis. Eligendi, quis asperiores!&amp;Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <p class="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque inventore reiciendis explicabo ex facere a voluptate in ut minus, error, debitis commodi magnam. &amp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sunt natus delectus repellat blanditiis qui placeat eligendi iure eaque corporis.? &amp;Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p class="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, perferendis. Eligendi, quis asperiores!&amp;Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
 )
}
export default AboutPage;