import React, { Component } from "react";

class AboutMe extends Component {
  render() {
    return (
      <div className="about-me">
          {" "}
          <img
            src="https://cdn.glitch.com/a218d1e7-2d7e-471f-8aef-f60d975c8d51%2FJPEG_20191129_204416_-1882540633.jpg?v=1576149245284"
            alt="img"
            className="about-me-img"
          />
        <div className="text-box">
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim lacinia dui ac vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi ac orci lacus. Proin vehicula aliquet odio nec dapibus. Vivamus orci metus, ullamcorper eget erat in, blandit fringilla massa. Suspendisse ullamcorper lectus sed nibh eleifend dictum. Nunc mattis massa augue, vel commodo lectus condimentum sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec interdum mi a est volutpat laoreet. Vestibulum dictum, ante quis tincidunt efficitur, turpis nunc consectetur metus, at .
          </p>
      </div>
    </div>
    );
  }
}

export default AboutMe;
