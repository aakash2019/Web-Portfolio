import React, { Fragment } from "react";

import Particles from "react-particles-js";

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 2000,
      },
    },
  },
};

function Header({ resumeData }) {
  return (
    <Fragment>
      <header id="home">
        <div className="image_setting">
          <Particles className="particles" params={particlesOptions} />
        </div>
        <nav id="nav-wrap">
          <ul id="nav" className="nav" style={{ fontFamily: "Montserrat" }}>
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Projects
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1
              className="responsive-headline"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              <span className="resumeName" data-title="AAKASH KUMAR">
                {resumeData.name}
              </span>
            </h1>
            <h3 className="responsive-headline">
              <span className="roleDescription"></span>
            </h3>

            <h3
              style={{
                color: "#0f0f0f",
                fontSize: "22px",
                fontFamily: "Raleway",
              }}
            >
              {resumeData.roleDescription}
            </h3>
            <hr />
            <ul className="social">
              {resumeData.socialLinks &&
                resumeData.socialLinks.map((item) => {
                  return (
                    <li key={item.name}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.src === "devicon" ? (
                          <i className={item.className}></i>
                        ) : (
                          <img src={item.clasName} alt={item.namee} />
                        )}
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    </Fragment>
  );
}

export default Header;
