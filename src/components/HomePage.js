import React from 'react';
import AboutPage from "./AboutPage"
import Project from "./Project"
import Contact from "./Contact"
import "../style/HomePage.css"

function HomePage(props){
      return(
         <div>
             <div className="jumbotron jumbotron-fluid home">
               <div class="row mx-auto">
                <div class=" col-lg-8 container text-center homeStyle">
                 <h1 class="display-1"><strong>Hello,I'm Akanksha Gupta</strong></h1>
                 <h5 class="display-3">I'm a Full-Stack Web Developer</h5>
                 <hr/>
                 <div class="row">
                <div class="col-lg-12">

                    <ul class="list-inline mb-0">
                        <li class="list-inline-item">
                          <img  class="icon" src='https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/184/full/html5.png' alt="html icon"/>
                        </li>
                        <li class="list-inline-item">
                          <img class="icon" src='https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/css-512.png' alt="css icon"/>
                        </li>
                        <li class="list-inline-item">
                          <img class="icon" src='https://miro.medium.com/max/1024/1*9HanDsRU11ZMsgDGJwN96w.png' alt="bootstrap icon"/>
                        </li>
                        <li class="list-inline-item">
                          <img class="icon" src='https://i.ya-webdesign.com/images/vector-javascript-1.png' alt="js icon"/>
                        </li>
                        <li class="list-inline-item">
                          <img class="icon" src='https://icons.iconarchive.com/icons/sicons/basic-round-social/512/jquery-icon.png' alt=" jquery icon"/>
                        </li>
                        <li class="list-inline-item">
                          <img class="icon" src='https://pngimage.net/wp-content/uploads/2018/06/node-png-7.png' alt="node icon" />
                        </li>
                        <li class="list-inline-item">
                          <img class="icon" src='https://cdn4.iconfinder.com/data/icons/logos-3/426/mysql-512.png' alt="mysql icon"/>
                        </li>
                        <li class="list-inline-item">
                          <img class="icon" src='https://user-images.githubusercontent.com/11978772/40430921-73d53922-5e63-11e8-8dcd-1662136c3212.png' alt="mongodb icon"/>
                        </li>
                        <li class="list-inline-item">
                          <img class="icon" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png' alt="react icon"/>
                        </li>
                        <li class="list-inline-item">
                          <img class="icon" src='https://blogs.vmware.com/management/files/2019/04/25231.png' alt="react icon"/>
                        </li>
                        <li class="list-inline-item">
                          <img class="icon" src='https://www.indiatrainings.in/wp-content/uploads/2016/12/certificate.png' alt="pega icon"/>
                        </li>
                    </ul>

                </div>
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