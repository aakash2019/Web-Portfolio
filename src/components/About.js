import React, { Component } from "react";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div
          className="row"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            marginLeft: "0px",
          }}
        >
          <div
            className="three columns"
            style={{
              display: "flex",
              flexDirection: "column",
              flexGrow: "1",
              flex: "0.4",
            }}
          >
            <center>
              <img
                className=""
                style={{
                  borderRadius: "50%",
                  marginBottom: "20px",
                  boxShadow:
                    "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.3)",
                }}
                src="images/pic2.jpg"
                alt=""
              />
            </center>
          </div>

          <div
            className="nine columns main-col"
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              flex: "0.6",
            }}
          >
            <h2 style={{ fontFamily: "Montserrat", fontSize: "2em" }}>
              About Me
            </h2>
            <p
              style={{
                fontSize: "2rem",
                fontFamily: "Raleway",
                color: "#fff",
              }}
            >
              {resumeData.aboutme}
            </p>
            <div className="row">
              <div
                className="columns contact-details"
                style={{ width: "100%" }}
              >
                <h2 style={{ fontFamily: "Montserrat", fontSize: "2em" }}>
                  Contact Details
                </h2>
                <div style={{ fontSize: "2rem", fontFamily: "Raleway" }}>
                  <p className="address" style={{ color: "#fff" }}>
                    <span>{resumeData.name}</span>
                    <br></br>
                    <a href={`tel:{resumeData.mobilenum}`}>
                      <span>
                        <i className="fas fa-phone"></i>
                      </span>
                      <span> </span>
                      <span>{resumeData.mobilenum} </span>
                    </a>
                    <a href={`https://wa.me/{resumeData.mobilenum}`}>
                      <span>
                        <i className="fab fa-whatsapp"></i>
                      </span>
                      <span> </span>
                    </a>
                    <br></br>
                    <span>{resumeData.address}</span>
                    <br></br>
                    <span>{resumeData.country}</span>
                    <br></br>
                    <a href="mailto:aakash20kumar@gmail.com">
                      aakash20kumar@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}