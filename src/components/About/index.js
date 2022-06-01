import React from 'react';

function About() {
    return (
        <section className="container">
            <h2 className="nav-title-font">Nghia Le</h2>
            <hr />
            <div>
                <img className="mb-5" id="avatar" src={process.env.PUBLIC_URL + '/'}
            </div>
        </section>
    )
}