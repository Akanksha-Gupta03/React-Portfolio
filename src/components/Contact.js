import React from 'react';
import "../style/Contact.css"

function Contact(props){
    return(
        
        <div class="contact bg-info">
            <div class="container">
            <div class="card mx-auto">
            <div class="card-body">
                <h1 class="contHead">contact me</h1>
                <h2 class="heart i">&hearts;</h2>
                <div class="row">
                <div class="col-lg-12">
                    <h2 class="my-email">akanksha.rapti@gmail.com</h2>
                    <button onclick="copyEmail('#my-email')">copy email</button>
                </div>
                </div>
                <div class="row">
                <div class="col-lg-12">

                    <ul class="list-inline mb-0">
                        <li class="list-inline-item">
                            <a class="btn btn-outline-light btn-social text-center rounded-circle" href=" #">
                            <i class="fa fa-fw fa-facebook"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="btn btn-outline-light btn-social text-center rounded-circle" href=" #">
                            <i class="fa fa-fw fa-linkedin"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="btn btn-outline-light btn-social text-center rounded-circle" href=" #">
                            <i class="fa fa-fw fa-instagram"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="btn btn-outline-light btn-social text-center rounded-circle" href=" #">
                                <i class="fa fa-fw fa-pinterest"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="btn btn-outline-light btn-social text-center rounded-circle" href=" #">
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