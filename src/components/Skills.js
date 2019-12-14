import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <h2>Skills</h2>

        <div className="cards">
          <div className="card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
              alt="img"
            />
            <h3>HTML</h3>
          </div>

          <div className="card">
            <img
              src="https://retohercules.com/images/css3-logo-png-2.png"
              alt="img"
            />
            <h3>CSS</h3>
          </div>

          <div className="card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              alt="img"
            />
            <h3>JavaScript</h3>
          </div>

          <div className="card">
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
              alt="img"
            />
            <h3>React</h3>
          </div>

          <div className="card">
            <img
              src="https://sass-lang.com/assets/img/styleguide/color-1c4aab2b.png"
              alt="img"
            />
            <h3>Sass</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
