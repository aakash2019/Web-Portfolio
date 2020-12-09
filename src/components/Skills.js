import React, { Component } from "react";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="skills">
        <div className="row skill">
          <div className="three columns header-col">
            <h1
              style={{
                fontSize: "40px",
                fontFamily: "Montserrat",
              }}
            >
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p style={{ fontSize: "30px", fontFamily: "Montserrat" }}>
              {resumeData.skillsDescription}
            </p>

            <div className="row">
              <div className="twelve columns collapsed">
                <div
                  id="portfolio-wrapper"
                  className="bgrid-quarters s-bgrid-thirds cf"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  {resumeData.skills &&
                    resumeData.skills.map((item, index) => {
                      return (
                        <div
                          className="columns portfolio-item skills-item"
                          key={index}
                        >
                          <div
                            className="item-wrap skills-border"
                            style={{ background: "#0f0f0f" }}
                          >
                            <center>
                              {item.src === "devicon" ? (
                                <div
                                  className="skill-logo"
                                  style={{ margin: "15px" }}
                                >
                                  <i className={item.icon}></i>
                                </div>
                              ) : (
                                <img
                                  src={item.icon}
                                  alt="Resume skill"
                                  style={{ margin: "15px" }}
                                />
                              )}
                            </center>
                            <div className="overlay">
                              <div className="portfolio-item-meta">
                                <center>
                                  <h5
                                    style={{
                                      marginBottom: "-15px",
                                      textAlign: "center",
                                      padding: "20px 0px",
                                      fontFamily: "Raleway",
                                    }}
                                  >
                                    {item.skillname}
                                  </h5>
                                  <p
                                    style={{
                                      marginBottom: "2px",
                                      fontFamily: "Raleway",
                                    }}
                                  >
                                    {item.description}
                                  </p>
                                </center>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
