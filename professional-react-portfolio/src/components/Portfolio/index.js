
import React from "react";
import ProjectCards from "../Project";
import 'bootstrap/dist/css/bootstrap.min.css';

const portfolio =[
    {
        "id":1,
        "name":"ARTKetplace",
        "image":"/images/artketplace.png",
        "github":"https://github.com/Nghia314/artketplace",
        "deploy":"https://artketplace.herokuapp.com"
    },
    {
        "id":2,
        "name":"The Travel Center",
        "image":"/images/the-travel-center.png",
        "github":"https://github.com/Nghia314/the-travel-center",
        "deploy":"https://nghia314.github.io/the-travel-center/"
    },
    {
        "id":3,
        "name":"Note Taker",
        "image":"/images/notetaker.png",
        "github":"https://github.com/Nghia314/Note-Taker",
        "deploy":"https://note-taker-aop.herokuapp.com/"
    },
    {
        "id":4,
        "name":"E-Commerce-Backend",
        "image":"/public/Images/E-commerce-backend.png",
        "github":"https://github.com/Nghia314/E-commerce-backend",
        "video":"https://www.youtube.com/watch?v=ts8AyJVCEOQ"
    }
]
function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>
}

function Portfolio() {
    return (
        <section className="container">
            <div className="project">
                <h2 className="top-title">Portfolio</h2>
                <hr />
            </div>

            <Wrapper id="card-data">
                {portfolio.map((project) => (
                    <ProjectCards key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy} video={project.video} />

                ))}
            </Wrapper>
        </section>
    )
}

export default Portfolio;