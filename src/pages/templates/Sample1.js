

// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';

// function Sample1() {
//   const user = JSON.parse(localStorage.getItem('resumebuilder'));

//   return (
//     <Container className="p-3">
//       <Row>
//         <Col md={8}>
//           <h1 className="mb-0">{user.firstName} {user.lastName}</h1>
//           <p className="lead">{user.email} | {user.phoneNumber}</p>
//         </Col>
//         <Col md={4}>
//           <div className="text-md-right">
//             <h5>Technical Skills</h5>
//             <p><strong>Programming Languages:</strong> {user.progLanguages.map((progL,index)=>(
//               <div key={index}>
//              <h5 className="mb-0">{progL.progLanguages}</h5>
            
//               </div>
//           ))}</p>
//             <p><strong>Databases:</strong> {user.dataBases.map((dataB,index)=>(
//               <div key={index}>
//              <h5 className="mb-0">{dataB.dataBases}</h5>
            
//               </div>
//           ))}</p>
//             <p><strong>Tools:</strong> {user.tools.map((tool,index)=>(
//               <div key={index}>
//              <h5 className="mb-0">{tool.tools}</h5>
            
//               </div>
//           ))}</p>
//             <p><strong>Natural Languages:</strong> {user.naturalLanguages.map((naturalL,index)=>(
//               <div key={index}>
//              <h5 className="mb-0">{naturalL.naturalLanguages}</h5>
            
//               </div>
//           ))}</p>
//           </div>
//         </Col>
//       </Row>
//       <Row className="py-4">
//         <Col md={4}>
//           <h4 className="mb-3">Education</h4>
//           {user.education.map((ed,index)=>(
//               <div key={index}>
//              <h5 className="mb-0">{ed.school}</h5>
//               <p className="text-muted">{ed.relevantCourseWork}</p>
//               <p className="text-muted">{ed.graduationMonth}</p>
//               <p className="text-muted">{ed.graduationYear}</p>
//               </div>
//           ))}
//         </Col>
//         <Col md={8}>
//           <h4 className="mb-3">Professional Experience</h4>
//           {user.experience.map((exp, index) => (
//             <div key={index}>
//               <h5 className="mb-0">{exp.position} | {exp.company}</h5>
//               <p className="text-muted">{exp.whenDidYouStart} - {exp.ifFinishedWhen}</p>
//               {/* <ul className="list-unstyled">
//                 {exp.responsibilities.map((responsibility, index) => (
//                   <li key={index}>{responsibility}</li>
//                 ))}
//               </ul> */}
//                <p className="text-muted">{exp.whatIsYourInTheCompany}</p>
//             </div>
//           ))}
//         </Col>
//       </Row>
//       <Row>
//         <Col md={12}>
//           <h4 className="mb-3">Projects</h4>
//           {user.projects.map((project, index) => (
//             <div key={index}>
//               <h5 className="mb-0">{project.projectName}</h5>
//               {/* <p className="text-muted">{project.startDate} - {project.endDate}</p> */}
//               <ul className="list-unstyled">
//                 <li>{project.description}</li>
//                 <li><a href={project.githubLink}>Github Link</a></li>
//                 {project.liveLink && <li><a href={project.liveLink}>Live Link</a></li>}
//               </ul>
//             </div>
//           ))}
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Sample1;

// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import '../../resources/sample1.css';

// function Sample1() {
//   const user = JSON.parse(localStorage.getItem('resumebuilder'));

//   return (
//     <Container className="p-3">
//       <Row>
//         <Col md={8}>
//           <h1 className="mb-0">{user.firstName} {user.lastName}</h1>
//           <p className="lead">{user.email} | {user.phoneNumber}</p>
//         </Col>
//         <Col md={4}>
//           <div className="text-md-right">
//             <h5>Technical Skills</h5>
//             <div className="skills-list">
//               <p><strong>Programming Languages:</strong></p>
//               <ul>
//                 {user.progLanguages.map((progL,index)=>(
//                   <li key={index}>{progL.progLanguages}</li>
//                 ))}
//               </ul>
//               <p><strong>Databases:</strong></p>
//               <ul>
//                 {user.dataBases.map((dataB,index)=>(
//                   <li key={index}>{dataB.dataBases}</li>
//                 ))}
//               </ul>
//               <p><strong>Tools:</strong></p>
//               <ul>
//                 {user.tools.map((tool,index)=>(
//                   <li key={index}>{tool.tools}</li>
//                 ))}
//               </ul>
//               <p><strong>Natural Languages:</strong></p>
//               <ul>
//                 {user.naturalLanguages.map((naturalL,index)=>(
//                   <li key={index}>{naturalL.naturalLanguages}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </Col>
//       </Row>
//       <Row className="py-4">
//         <Col md={4}>
//           <h4 className="mb-3">Education</h4>
//           {user.education.map((ed,index)=>(
//               <div key={index}>
//              <h5 className="mb-0">{ed.school}</h5>
//               <p className="text-muted">{ed.relevantCourseWork}</p>
//               <p className="text-muted">{ed.graduationMonth} {ed.graduationYear}</p>
//               </div>
//           ))}
//         </Col>
//         <Col md={8}>
//           <h4 className="mb-3">Professional Experience</h4>
//           {user.experience.map((exp, index) => (
//             <div key={index}>
//               <h5 className="mb-0">{exp.position} | {exp.company}</h5>
//               <p className="text-muted">{exp.whenDidYouStart} - {exp.ifFinishedWhen}</p>
//               <p className="text-muted">{exp.whatIsYourInTheCompany}</p>
//             </div>
//           ))}
//         </Col>
//       </Row>


import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DefaultLayout from '../../components/DefaultLayout';
import '../../resources/sample1.css';

function Sample1() {
  const user = JSON.parse(localStorage.getItem('resumebuilder'));

  return (
    <DefaultLayout>
    <Container className="p-3">
           <br/>
           <br/>
           <br/>
           <br/>
      <Row>
        <Col>
          <h1 className="mb-0 name">{user.firstName} {user.lastName}</h1>
          <p className="lead contact-info">{user.email} | {user.phoneNumber}</p>
        </Col>
      </Row>
      
      <Row>
        <Col>
          <h4 className="mb-3 section-title">Technical Skills</h4>
          <div className="skills-list">
            <p className="skill-category"><strong>Programming Languages:</strong></p>
            <ul className="skill-items">
              {user.progLanguages.map((progL,index)=>(
                <li key={index}>{progL.progLanguages}</li>
              ))}
            </ul>
            <p className="skill-category"><strong>Databases:</strong></p>
            <ul className="skill-items">
              {user.dataBases.map((dataB,index)=>(
                <li key={index}>{dataB.dataBases}</li>
              ))}
            </ul>
            <p className="skill-category"><strong>Tools:</strong></p>
            <ul className="skill-items">
              {user.tools.map((tool,index)=>(
                <li key={index}>{tool.tools}</li>
              ))}
            </ul>
            <p className="skill-category"><strong>Natural Languages:</strong></p>
            <ul className="skill-items">
              {user.naturalLanguages.map((naturalL,index)=>(
                <li key={index}>{naturalL.naturalLanguages}</li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
      
      <Row className="py-4">
        <Col>
          <h4 className="mb-3 section-title">Education</h4>
          {user.education.map((ed,index)=>(
            <div key={index} className="education-item">
              <h5 className="mb-0 school">{ed.school}</h5>
              <p className="text-muted relevant-coursework">{ed.relevantCourseWork}</p>
              <p className="text-muted graduation-date">{ed.graduationMonth} {ed.graduationYear}</p>
            </div>
          ))}
        </Col>
      </Row>
      
      <Row className="py-4">
        <Col>
          <h4 className="mb-3 section-title">Professional Experience</h4>
          {user.experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <h5 className="mb-0 position-company">{exp.position} | {exp.company}</h5>
              <p className="text-muted experience-dates">{exp.whenDidYouStart} - {exp.ifFinishedWhen}</p>
              <p className="text-muted experience-description">{exp.whatIsYourInTheCompany}</p>
            </div>
          ))}
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h4 className="mb-3">Projects</h4>
          {user.projects.map((project, index) => (
            <div key={index}>
              <h5 className="mb-0">{project.projectName}</h5>
              <ul className="list-unstyled">
                <li>{project.description}</li>
                <li><a href={project.githubLink}>Github Link</a></li>
                {project.liveLink && <li><a href={project.liveLink}>Live Link</a></li>}
              </ul>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
    </DefaultLayout>
  );
}

export default Sample1;
