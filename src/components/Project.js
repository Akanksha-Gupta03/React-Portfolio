import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "./projects.json";
import "../style/Project.css"

function Project( props ){
    return (
        <div class="portfolio" id="portfolioSection">
          <div class="container">
            <h1 class="portHead">MY WORK</h1>
            <div class="thumbnailWrapper">
             <div class="row">
              {projects.map( project=><ProjectCard {...project} />)}
             </div>
            </div>
          </div>
        </div>
    )
}

export default Project;
