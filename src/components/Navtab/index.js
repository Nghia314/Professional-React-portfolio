import React from "react";

function Navtab(props) {
    const tabs = ["About", "Portfolio", "Contact", "Resume"];
    return (
        <div className="navtabs is-centered">
            <ul className="nav nav-tabs">
                {tabs.map((tab) => (
                    <li 
                    className={props.currentPage === tab ? "nav-item is-active" : "nav-item"}
                    key={tab}>
                        <a href={"#" + tab.toLowerCase()}
                        onclick={() => props.handlePageChange(tab)}
                        className={props.currentPage === tab ? "nav-link is-active" : "nav-link"}>
                            {tab}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navtab