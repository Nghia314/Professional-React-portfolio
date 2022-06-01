import React from 'react';

function About() {
    return (
        <section className="container">
            <h2 className="nav-title-font">Nghia Le</h2>
            <hr />
            <div>
                <img className="mb-5" id="avatar" src={process.env.PUBLIC_URL + '/Assets/portfolio.webp'} alt="Nghia Le" />
                <p>
                    My name is Nghia Le and I have 3+ years of manager constrctions and I'm a student at Berkeley University bootcamp pursuing Full stack web development.
                </p>
            </div>
        </section>
    )
}

export default About;