import React from 'react';
import "../style/Contact.css"

function Contact(props){
    return(
        
        <div class="contact bg-info">
            <div class="container">
            <div class="card mx-auto cardStyle">
            <div class="card-body">
                <h1 class="contHead">CONTACT ME</h1>
                <div class="row">
                <div class="col-lg-12">
                    <h2 class="my-email">akanksha.rapti@gmail.com</h2>
                </div>
                </div>
                <div class="row">
                <div class="col-lg-12">

                    <ul class="list-inline mb-0">
                        <li class="list-inline-item">
                            <a class="btn btn-outline-light btn-social text-center rounded-circle" href="https://www.linkedin.com/in/akanksha-gupta-151516148/">
                            <i class="fa fa-fw fa-linkedin"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="btn btn-outline-light btn-social text-center rounded-circle" href="https://github.com/Akanksha-Gupta03">
                                <i class="fa fa-fw fa-github"></i>
                            </a>
                        </li>
                        </ul>

                </div>
                </div>

            </div>
        </div>  
        </div>
        </div>
 );
}
export default Contact;