




import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DefaultLayout from '../../components/DefaultLayout';
import '../../resources/sample1.css';
import html2pdf  from 'html2pdf.js';

function Sample1() {
  const user = JSON.parse(localStorage.getItem('resumebuilder'));

  const downloadPDF = () => {
    const element = document.getElementById('cvContent');
    const opt = {
      margin: 1,
      filename: `${user.firstName}_${user.lastName}_CV.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
  };


  return (
    <DefaultLayout>
      <br/>
      <br/>
      <br/>
      <br/>

    <Container className="p-0" id="cvContent">
         
      <Row>
        <Col>
          <h1 className="mb-0 name">{user.firstName} {user.lastName}</h1>
          <p className="lead contact-info">{user.email} | {user.phoneNumber}</p>
        </Col>
      </Row>
      
      <Row>
        <Col>
          <h4 className="mb-2 section-title">Technical Skills</h4>
          <div className="skills-list">
            <p className="mb-1 skill-category"><strong>Programming Languages:</strong></p>
            <ul className="mb-1 skill-items">
              {user.progLanguages.map((progL,index)=>(
                <li key={index}>{progL.progLanguages}</li>
              ))}
            </ul>
            <p className="mb-1 skill-category"><strong>Databases:</strong></p>
            <ul className="mb-1 skill-items">
              {user.dataBases.map((dataB,index)=>(
                <li key={index}>{dataB.dataBases}</li>
              ))}
            </ul>
            <p className="mb-1 skill-category"><strong>Tools:</strong></p>
            <ul className="skill-items">
              {user.tools.map((tool,index)=>(
                <li key={index}>{tool.tools}</li>
              ))}
            </ul>
            <p className="mb-1 skill-category"><strong>Natural Languages:</strong></p>
            <ul className="mb-1 skill-items">
              {user.naturalLanguages.map((naturalL,index)=>(
                <li key={index}>{naturalL.naturalLanguages}</li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
      
      <Row className="py-2">
        <Col>
          <h4 className="mb-1 section-title">Education</h4>
          {user.education.map((ed,index)=>(
            <div key={index} className="education-item">
              <h5 className="mb-0 school">{ed.school}</h5>
              <p className="mb-1 text-muted relevant-coursework">{ed.relevantCourseWork}</p>
              <p className="mb-1 text-muted graduation-date">{ed.graduationMonth} {ed.graduationYear}</p>
            </div>
          ))}
        </Col>
      </Row>
      
      <Row className="py-2">
        <Col>
          <h4 className="mb-1 section-title">Professional Experience</h4>
          {user.experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <h5 className="mb-0 position-company">{exp.position} | {exp.company}</h5>
              <p className="mb-1 text-muted experience-dates">{exp.whenDidYouStart} - {exp.ifFinishedWhen}</p>
              <p className="mb-1 text-muted experience-description">{exp.whatIsYourInTheCompany}</p>
            </div>
          ))}
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h4 className="mb-1">Projects</h4>
          {user.projects.map((project, index) => (
            <div key={index}>
              <h5 className="mb-0">{project.projectName}</h5>
              <ul className="mb-1 list-unstyled">
                <li>{project.description}</li>
<li>
  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Link</a>
  {project.liveLink && (
    <>
      &nbsp;|&nbsp;
      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Link</a>
    </>
  )}
</li>


              </ul>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
    <button onClick={downloadPDF} className="download-btn">
        Download CV
      </button>
    </DefaultLayout>
  );
}

export default Sample1;



