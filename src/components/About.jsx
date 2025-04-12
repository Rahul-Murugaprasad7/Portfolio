import React from 'react';

const About = () => {
  return (
    <div id="About">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src="/image/passport_size.png" alt="profile" />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <p>
              Seeking a challenging position in a reputed organization to learn new skills, expand my knowledge, and leverage learnings day by day.
            </p>

            <div className="tab-titles">
              <p className="tab-links active-link">Skills</p>
              <p className="tab-links">Experience</p>
              <p className="tab-links">Education</p>
            </div>

            <div className="tab-contents active-tab" id="Skills">
              <ul>
                <li><span>Software Developer</span><br />Full Stack Developer</li>
                <li><span>Web Development</span><br />Web App Development</li>
                <li><span>App Development</span><br />Building Android/iOS apps</li>
              </ul>
            </div>

            <div className="tab-contents" id="Experience">
              <ul>
                <li><span>Software Developer</span><br />Full Stack Developer</li>
                <li><span>Web Development</span><br />Web App Development</li>
                <li><span>App Development</span><br />Building Android/iOS apps</li>
              </ul>
            </div>

            <div className="tab-contents" id="Education">
              <ul>
                <li><span>2020-2023</span><br />BSc Computer Technology at KG College</li>
                <li><span>2018-2020</span><br />AISSCE at Angappa CBSE</li>
                <li><span>2017-2018</span><br />AISSE at Amrita Vidyalayam</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
