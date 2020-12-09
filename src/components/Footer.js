import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="footer">
        <div className="row">
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open" />
            </a>
          </div>
          <div className="contact_info">
            <h1 style={{ fontFamily: "Montserrat" }}>
              Let's make something awesome together
            </h1>
            <div className="contact_main_heading">
              <h2 style={{ fontFamily: "Raleway" }}>Get in touch</h2>
            </div>
          </div>
          <div
            className="twelve columns"
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <ul className="social-links">
              {resumeData.socialLinks &&
                resumeData.socialLinks.map((item, index) => {
                  return (
                    <li key={index} style={{ margin: "20px" }}>
                      <a href={item.url}>
                        <i className={item.className} />
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
