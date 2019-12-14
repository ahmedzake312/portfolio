import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <h2>Projects</h2>

        <div className="projects-grid">
          <div className="project">
            <img
              src="https://cdn.glitch.com/a218d1e7-2d7e-471f-8aef-f60d975c8d51%2FScreenshot_2019-12-12-16-55-55-1.png?v=1576159684540"
              alt="img"
              class="project-img"
            />
            <div className="btns">
            <a
              href="https://gifted-cray-5f4544.netlify.com/"
              className="y-btn"
              target="_blank"
            >
              Live Page
            </a>
            <a
              href="https://github.com/ahmedzake312/Bookmark-landing-page/tree/glitch"
              className="btn"
              target="_blank"
            >
              Code
            </a>
            </div>
          </div>

          <div className="project">
            <img
              src="https://cdn.glitch.com/a218d1e7-2d7e-471f-8aef-f60d975c8d51%2FScreenshot_2019-12-12-16-58-49-1.png?v=1576159701503"
              alt="img"
              class="project-img"
            />
            <div className="btns">
            <a
              href="https://happy-agnesi-f1bc7a.netlify.com/"
              className="y-btn"
              target="_blank"
            >
              Live Page
            </a>
            <a
              href="https://github.com/ahmedzake312/huddle/tree/glitch"
              className="btn"
              target="_blank"
            >
              Code
            </a>
            </div>
          </div>

          <div className="project">
            <img
              src="https://cdn.glitch.com/a218d1e7-2d7e-471f-8aef-f60d975c8d51%2FScreenshot_2019-12-12-16-59-53-1.png?v=1576159728725"
              alt="img"
              class="project-img"
            />
            <div className="btns">
            <a
              href="https://wonderful-blackwell-31de94.netlify.com/"
              className="y-btn"
              target="_blank"
            >
              Live Page
            </a>
            <a
              href="https://github.com/ahmedzake312/react-phone-store/tree/glitch"
              className="btn"
              target="_blank"
            >
              Code
            </a>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}
export default Projects;
