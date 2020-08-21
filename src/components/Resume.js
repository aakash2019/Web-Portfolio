import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1 style={{fontSize:"30px"}}><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.YearOfJoining} - {item.YearOfPassing}</em></p>
                          <p>
                          Achievement: {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1 style={{fontSize:"30px"}}><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfJoining} {item.YearOfJoining} - {item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                          <p>
                          {item.UsedTech}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1 style={{fontSize:"40px"}}><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

               <p style={{fontSize:"30px"}}>
               {resumeData.skillsDescription}
               </p>

   				<div>

            <div className="row">
        <div className="twelve columns collapsed">
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            {
              resumeData.skills && resumeData.skills.map((item)=>{
                return(
                  <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <center>
                        {item.src === "devicon" ? 
                          <div className="skill-logo" style={{margin:"15px"}}>
                            <i className={`${item.icon}`}></i>
                          </div>
                          :
                          <img src={`${item.icon}`} alt='Resume skill' style={{margin:"15px"}}/>
                        }
                      </center>
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <center>
                            <h5 style={{textAlign:"center", padding:"30px 0px"}}>{item.skillname}</h5>
                            <p>{item.description}</p>
                            </center>
                          </div>
                        </div>
                    </div>
                  </div>
                )
              })
            }
            </div>
          </div>
        </div>

   				   {/*<ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li><em>{item.skillname}</em>
                      </li>
                    )
                  })
                }

   					</ul>*/}

   				</div>

   			</div>

         </div>

      </section>
    );
  }
}