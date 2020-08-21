import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1 style={{fontSize:"30px"}}>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            {
              resumeData.portfolio && resumeData.portfolio.map((item)=>{
                return(
                  <div className="columns portfolio-item">
                    <a href={item.link}>
                      <div className="item-wrap">
                          <img 
                            src={`${item.imgurl}`} 
                            alt="Project"
                            className="item-img" 
                            style={{height:"250px", width:"400px"}}
                          />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                      </div>
                    </a>
                  </div>
                )
              })
            }
            </div>
          </div>
        </div>
      </section>
        );
  }
}