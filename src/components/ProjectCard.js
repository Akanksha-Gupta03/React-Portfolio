import React from "react";
import "../style/ProjectCard.css"
import "aos";

function ProjectCard( props ){
    return (
        <div class="col-md-4">
         <div class="imgContainer" data-aos-duration="2000" data-aos="fade-up" data-aos-easing="ease-in-sine">
          <img class="img-fluid imgMod" src={props.image} alt=" " />
          <a class="projectName" href={props.link}><p>{props.name}</p></a>
          <p class="desc">{props.description}</p>
         </div>
        </div>
    )
}

export default ProjectCard;

