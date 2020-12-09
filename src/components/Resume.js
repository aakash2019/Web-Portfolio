import React, { Component } from "react";
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1 style={{ fontSize: "30px", fontFamily: "Montserrat" }}>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.education &&
              resumeData.education.map((item, index) => {
                return (
                  <div className="row item" key={index}>
                    <div className="twelve columns">
                      <h3 style={{ fontFamily: "Montserrat" }}>
                        {item.UniversityName}
                      </h3>
                      <p
                        className="info"
                        style={{ fontFamily: "Titillium Web" }}
                      >
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em
                          className="date"
                          style={{ fontFamily: "Titillium Web" }}
                        >
                          {item.MonthOfJoining} {item.YearOfJoining}{" "}
                          {item.MonthOfLeaving} {item.YearOfPassing}
                        </em>
                      </p>
                      <p style={{ fontFamily: "Raleway" }}>
                        {item.Achievements}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1 style={{ fontSize: "30px", fontFamily: "Montserrat" }}>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.work &&
              resumeData.work.map((item, index) => {
                return (
                  <div className="row item" key={index}>
                    <div className="twelve columns">
                      <h3 style={{ fontFamily: "Montserrat" }}>
                        {item.CompanyName}
                      </h3>
                      <p
                        className="info"
                        style={{ fontFamily: "Titillium Web" }}
                      >
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em
                          className="date"
                          style={{ fontFamily: "Titillium Web" }}
                        >
                          {item.MonthOfJoining} {item.YearOfJoining}{" "}
                          {item.MonthOfLeaving} {item.YearOfLeaving}
                        </em>
                      </p>
                      <p style={{ fontFamily: "Raleway" }}>
                        {item.Achievements}
                      </p>
                      <p>{item.UsedTech}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    );
  }
}
