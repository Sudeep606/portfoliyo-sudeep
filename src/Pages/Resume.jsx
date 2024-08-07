import React from 'react';
import myResume from '../assets/sudeep-faang.pdf';
import './resume.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Resume() {
  return (
    <>
      <div>
        <h2 className="text-center">Resume</h2>
        <Link style={{textDecoration:"none",fontSize:"20px"}} to="/home"><i className="fa-solid fa-arrow-left"></i>Back to Home</Link>

        <div className="d-flex justify-content-center my-4">
        <label className="experience-label me-3">Experience</label>      
            <button className="bg-slate-300 px-4 py-2 rounded">
            <a style={{ textDecoration: 'none' }} href={myResume} download="sudeepcv">
              Download Resume
            </a>
          </button>
        </div>
        {/* experience */}
        <div className="box">
          <Container>
            <Row>
              <Col>
                <div className="comp">
                  <p>Nov-23 -- Present</p>
                  <p>ME(A)RN STACK DEVELOPER</p>
                  <p>Luminar Technolab</p>
                </div>
              </Col>
              <Col>
              As a MERN Stack Intern, I worked closely with experienced developers to build and maintain web applications. 
              <br />My responsibilities included:
              <br />
 • Collaborating with the team to design user interfaces and user experiences.
<br /> • Writing clean, efficient, and maintainable code using HTML, CSS, JavaScript, React, MongoDB, Express, and Node.js.
 <br />• Conducting code reviews and providing constructive feedback to peers.
 <br />• Assisting in the deployment process and ensuring smooth operation post-deployment.
              </Col>
            </Row>
          </Container>
        </div>
        {/* education */}
        <h2 className="section-heading text-blue">Education</h2>
        <div className="box">
          <Container>
            <Row>
              <Col>
                <div className="comp">
                  <p>2019 -- 2023</p>
                  <p>Computer Science And Engineering</p>
                  <p>Musaliar College of Engineering And Technology</p>
                </div>
              </Col>
              <Col>
              During my B.Tech in Computer Science and Engineering, I gained a profound understanding of core technical subjects such as algorithms, data structures, operating systems, and software development. My academic journey was marked by hands-on experience in coding, project management, and collaborative teamwork, which honed my problem-solving skills and adaptability. Additionally, my involvement in various clubs and leadership roles helped me develop strong communication, leadership, and project management skills, preparing me to thrive in dynamic, tech-driven environments.
              </Col>
            </Row>
          </Container>
        </div>
        <h2 className="section-heading text-red">Professional Skills</h2>
        {/* Professional skills */}
        <div className="box mb-30" id='height'>
          <p>Programming Languages:   HTML, CSS, JavaScript, JAVA, SQL</p>
          <p>Libraries & Tools:   React, MongoDB, Node.js, Express, Azure</p>
          <p>Skills & Competencies:   DSA, Data Analyst, Critical Thinking, Creative Thinking, Time Management, Excel</p>
        </div>
      </div>
    </>
  );
}

export default Resume;

