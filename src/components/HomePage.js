import React from 'react';
import AboutPage from "./AboutPage"
import Project from "./Project"
import Contact from "./Contact"
import "../style/HomePage.css"

function HomePage(props){
    return(
        <div>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <div class="row row1">
                     <div class="col-6">
                        <h6 class="text">Hello,My Name is</h6>
                        <h1 class="text">Akanksha Gupta</h1>
                        <h3 class="text">Full Stack Developer</h3>
                        <div class="btn">
                            <a href=" #">DownLoad CV</a>
                        </div>
                        <br/>
                        <div class="container">
                            <div class="row row2 col-6 justify-content-center">
                                <h5 class="heading">=====Skills=====</h5>
                             </div>
                         <div class="row row3 skill">
                           <div class="skills col-lg-3">
                            <h5 class="skills">HTML</h5>
                            <h5 class="skills">CSS</h5>
                            <h5 class="skills">Bootstrap</h5>
                            <h5 class="skills">JavaScript</h5>
                            <h5 class="skills">jQuery</h5>
                          </div>
                          <div class="skills col-lg-3">
                            <h5 class="skills">node.js</h5>
                            <h5 class="skills">Express.js</h5>
                            <h5 class="skills">MySQL</h5>
                            <h5 class="skills">MongoDB</h5>
                            <h5 class="skills">React</h5>
                          </div>
                         </div>
                        </div>
                     </div>
                     <div class="col-6 text-center">
                         <img class="image" src="https://thumbs.dreamstime.com/b/cute-girl-avatar-icon-young-woman-glasses-pretty-lady-portrait-cartoon-illustration-beautiful-brunette-76317721.jpg" alt="" />
                     </div>
                    </div>
                </div>
            </div>
            <AboutPage />
            <Project />
            <Contact />
        </div>
             
 )
}
export default HomePage;