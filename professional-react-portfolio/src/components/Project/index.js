import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function ProjectCards(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={process.env.PUBLIC_URL + props.images} />
            </div>
            <div className="content">
                <p className="card-title">{props.name}</p>
                <p class="project-icons-container">
                    <a href ={props.github}><img class="project-icon" src="https://img.icons8.com/color/48/000000/github--v1.png" alt="github Repo" /></a>
                    <a href ={props.deploy}><img class="project-icon" src="https://img.icons8.com/color/48/000000/domain.png" alt="Live action" /></a>
                    <a href ={props.video}><img class="project-icon" src="https://img.icons8.com/color/48/000000/youtube.png" alt="demonstrate video" /></a>
                    
                </p>
            </div>
        </div>
    )
}

export default ProjectCards;