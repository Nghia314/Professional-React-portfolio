import React, { useState } from "react";
import Navtab from "../Navtab/index";
import About from "../About/index";
import Contact from "../Contact/index";
import Portfolio from "../Portfolio/index";
import Resume from "../Resume/index";

function Header() {
  const [currentPage, handlePageChange] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;

      default:
        return <About />;
    }
  };

  return (
    <div>
      <div className="head">
        <nav className="nav-link ">
          <div className="text-light">
            <a
              className="navbar-item"
              rel="noreferrer"
              target="_blank"
              href="https://github.com/Nghia314"
            >
              <span className="nav-title-font"> Nghia Le </span>
            </a>
          </div>
        </nav>
        <Navtab currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      <main>
        <div> {renderPage(currentPage)} </div>
      </main>
    </div>
  );
}



export default Header;
