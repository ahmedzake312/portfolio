import React, { Component } from 'react';
import './App.css';
import  ShowCase from "./components/ShowCase";
import  AboutMe from "./components/AboutMe";
import  Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
class App extends Component {
  render() {
    return (
      <div className="App">
        <ShowCase/>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Footer/>
      </div>
    );
  }
}

export default App;
