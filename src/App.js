import React from "react";
import './App.css';
import './resume.css'; // Import your CSS

function App() {
  return (
    <div>
      <header>
        <section>
          <div className="header-top">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link active" href="#">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#skills">Skills</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#education">Education</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#portfolio">Portfolio</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div id="heading-name">
              <h1>Prajot A. Raut</h1>
            </div>
            <div className="profile-icons">
              <ul>
                <li><a href="#"><i className="fa-brands fa-google" style={{ color: "white" }}></i></a></li>
                <li><a href="#"><i className="fa-brands fa-linkedin-in" style={{ color: "white" }}></i></a></li>
                <li><a href="#"><i className="fa-brands fa-github" style={{ color: "#f7f9fc" }}></i></a></li>
                <li><a href="#"><i className="fa-brands fa-stack-overflow" style={{ color: "#ffffff" }}></i></a></li>
              </ul>
            </div>
          </div>
          <div id="profile-image">
            <img
              src="https://i.ibb.co/ncQrzq1/Whats-App-Image-2024-02-16-at-8-49-23-PM-1.jpg"
              alt="profile"
            />
          </div>
          <div className="information-about">
            <p>
              <span style={{ color: "rgb(55, 15, 92)" }}>
                Hi! I am Prajot, an ambitious, disciplined and versatile person. 
                A tech enthusiast with a knack to gain new skills and experiences 
                and apply them to solve problems/challenges. I am currently pursuing 
                B-tech in Computer Engineering.
              </span><br />
              <br />
              <span style={{ fontStyle: "italic", textDecoration: "underline" }}>My aim is:</span><br />
              <br />To excel in all aspects of work.<br />
              Work with an organization where I can bring new ideas to the table and 
              collaborate with amazing people for personal and organization's growth.<br />
              To improve and be a better person each day.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <div className="heading">
            <img id="logo" src="https://www.pngitem.com/pimgs/m/178-1788791_learn-lamp-icon-png-blue-transparent-png.png" alt="logo" />
            <h2>SKILLS</h2>
          </div>
          <div className="skill-list">
            <div className="skill">
              <div id="C" className="skill-progress">C</div>
            </div>
            <div className="skill">
              <div id="Cpp" className="skill-progress">C++</div>
            </div>
            <div className="skill">
              <div id="Python" className="skill-progress">Python</div>
            </div>
            <div className="skill">
              <div id="HTML" className="skill-progress">HTML</div>
            </div>
            <div className="skill">
              <div id="CSS" className="skill-progress">CSS</div>
            </div>
            <div className="skill">
              <div id="JS" className="skill-progress">JS</div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education">
          <div className="heading">
            <img id="logo" src="https://cdn-icons-png.flaticon.com/512/4751/4751311.png" alt="logo" />
            <h2>EDUCATION</h2>
          </div>
          <div className="universities">
            <div className="university">
              <div className="degree">B-Tech in Computer Engineering</div>
              <div className="institute-name">Pimpri Chinchwad College of Engineering</div>
              <div className="year">2021-2025</div>
              <div className="marks">CGPA: 8.18</div>
            </div>
            <div className="university">
              <div className="degree">Diploma in Mechanical Engineering</div>
              <div className="institute-name">Government Polytechnic Pune</div>
              <div className="year">2017-2020</div>
              <div className="marks">Percentage: 85.93</div>
            </div>
            <div className="university">
              <div className="degree">Secondary Education</div>
              <div className="institute-name">St' Andrews High School</div>
              <div className="year">2017</div>
              <div className="marks">Percentage: 91.2</div>
            </div>
            <div className="divider">
              <div className="moving-element" id="plane">
                <i className="fa-solid fa-plane" style={{ color: "#5831ce" }}></i>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio">
          <div className="heading">
            <img id="logo" src="https://cdn-icons-png.flaticon.com/512/1087/1087815.png" alt="logo" />
            <h2>PORTFOLIO</h2>
          </div>
          <div className="project-list">
            <div className="project">
              <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000025_1550237330_codezen_2.png" alt="project1" />
            </div>
            <div className="project">
              <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000024_1550237299_codezen.png" alt="project2" />
            </div>
            <div className="project">
              <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000025_1550237330_codezen_2.png" alt="project3" />
            </div>
            <div className="project">
              <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000024_1550237299_codezen.png" alt="project4" />
            </div>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
