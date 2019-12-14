import React, { Component } from 'react';

class ShowCase extends Component {
  render() {
    return (
      <div className="show-case" id="show-case">
        <div className="show-case-text">
          <h1>Hey,My Name Is Ahmed And I'm a Front-End Developer.</h1>
        </div>
        
        <div className="show-case-img">
          <img src="https://cdn.glitch.com/a218d1e7-2d7e-471f-8aef-f60d975c8d51%2Fillustration-hero.svg?v=1576146470764" alt="img"/>
        </div>
        
      </div>
    );
  }
}

export default ShowCase;
