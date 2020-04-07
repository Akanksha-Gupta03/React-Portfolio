import React from 'react';
import AboutPage from "./AboutPage"
import Project from "./Project"
import Contact from "./Contact"
import "../style/HomePage.css"

function HomePage(props){
      return(
         <div>
             <div className="jumbotron jumbotron-fluid home">
             <div className="container text-center text-white">
             <img class="image" src="https://thumbs.dreamstime.com/b/cute-girl-avatar-icon-young-woman-glasses-pretty-lady-portrait-cartoon-illustration-beautiful-brunette-76317721.jpg" alt="" />
             </div>
            
              <div className="container text-center text-white">
                <h1 className="display-4">Akanksha Gupta</h1>
                <p className="lead">Web Developer</p>
              </div>
              </div>
              <AboutPage />
             <Project />
             <Contact />
            
         </div>       
             
 )
}
export default HomePage;