import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import PortCarousel from "./components/PortCarousel";
import ContactUs from "./components/ContactUs";
import resumeData from "./resumeData";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Skills resumeData={resumeData} />
        <PortCarousel resumeData={resumeData} />
        <ContactUs resumeData={resumeData} />
      </div>
    );
  }
}

export default App;
