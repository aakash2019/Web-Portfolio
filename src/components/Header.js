import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home" className="col-12">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav-right">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
             <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               {/*<li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>*/}
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               
               <div class="container col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 vh-100">
                <div class="front side">
                  <div class="content group">
                    <h1>Aakash</h1>
                    <hr/>
                    <h4 style={{color:'#fff'}}>{resumeData.role}
                    </h4>
                    <p className="role">{resumeData.roleDescription}</p>
                  </div>
                </div>
                <div class="back side">
                  <div class="content" style={{textAlign:'center'}}>
                    <h1>Contact Me</h1>
                    <p className="address"  style={{fontSize:'20px'}}>
                      <span>{resumeData.name}</span>
                      <br></br>
                      <span>
                       <a href={`tel:${resumeData.mobilenum}`}>{resumeData.mobilenum}</a>
                      </span>
                      <br></br>
                       <span>
                       {resumeData.address}
                      </span>
                      <br></br>
                      <span>{resumeData.country}</span>
                      <br></br>
                      <a href={`${resumeData.website}`}>{resumeData.website}</a>
                   </p>
                  </div>
                </div>
              </div>


               {/*<h3 style={{color:'#fff', fontFamily:'sans-serif', textAlign:'center'}}>Welcome to my Portfolio website. I am a {resumeData.role}. {resumeData.roleDescription}
               </h3>
               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>*/}
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}