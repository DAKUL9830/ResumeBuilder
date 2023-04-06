import React,{useState}from 'react'
import 'antd/dist/antd.css';
import Education from './Education'
import Experience from './Experience'
import Profile from './Profile'
import Projects from './Projects';
import Skills from './Skills';
//import axios from 'axios';
import {axiosInst} from '../config'
import {saveAs} from 'file-saver';







function Resume() {
    let [step,setStep]=useState(1);
//profile

let [firstName,setFirstName]=useState('');
let [lastName,setLastName]=useState('');
let [email,setEmail]=useState('');
let [phone,setPhone]=useState('');
let [github,setGithub]=useState('');
let [linkedin,setLinkedin]=useState('');
let [website,setWebsite]=useState('');

//education
let [school,setSchool]=useState('');
let [relevantCoursework,setRelevantCoursework]=useState('');
let [graduationMonth,setGraduationMonth]=useState('');
let [graduationYear,setGraduationYear]=useState('');


//skills
let [progLanguages,setProgLanguages]=useState('');
let [database,setDatabase]=useState('');
let [tools,setTools]=useState('');
let [naturalLanguages,setNaturalLanguages]=useState('');

//projects
let [projectName,setProjectName]=useState('');
let [githubLink,setGithubLink]=useState('');
let [liveLink,setLiveLink]=useState('');
let [description,setDescription]=useState('');

//work experience
let [company,setCompany]=useState('');
let [position,setPosition]=useState('');
let [startDate,setStartDate]=useState('');
let [endDate,setEndDate]=useState('');
let [descriptionWork,setDescriptionWork]=useState('');




const value={
     // Profile-Information
     firstName,
     lastName,
     email,
     phone,
     website,
     github,
     linkedin,
    //  twitter,
    //  facebook,
    //  instagram,

    //  // Education Information
        school,
        relevantCoursework,
        graduationMonth,
        graduationYear,
    //  fromyear1,
    //  toyear1,
    //  qualification1,
    //  description1,
    //  school,
    //  fromyear2,
    //  toyear2,
    //  qualification2,
    //  description2,

    //  Skills
         progLanguages,
         database,
         tools,
         naturalLanguages,
    // Project Information...
         projectName,
         githubLink,
         liveLink,
         description,
    //  title1,
    //  link1,
    //  projectDescription1,
    //  title2,
    //  link2,
    //  projectDescription2,
    //  title3,
    //  link3,
    //  projectDescription3,

    //  // Experience Information
       company,
       position,
       startDate,
       endDate,
       descriptionWork
    //  institute1,
    //  position1,
    //  duration1,
    //  experienceDescription1,
    //  institute2,
    //  position2,
    //  duration2,
    //  experienceDescription2,

    //  // Extra Information
    //  skill1,
    //  skill2,
    //  skill3,
    //  skill4,
    //  skill5,
    //  skill6,
    //  interest1,
    //  interest2,
    //  interest3,
    //  interest4,
    //  interest5,
    //  interest6,



}

let submit = async e=>{
e.preventDefault();
try{
const body ={description};
const response= await fetch('http://localhost:4000/result',{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(body)
});
//console.log(response)
window.location='/';
}catch(err){
    console.error(err.message) 
}
}
 
let download = () => {
    axiosInst
        .post("/create-pdf", value)
        .then(() => {
            axiosInst
                .get("fetch-pdf", { responseType: "arraybuffer" })
                .then((res) => {
                    const pdfBlob = new Blob([res.data], {
                        type: "application/pdf",
                    });
                    saveAs(
                        pdfBlob,
                        `${value.firstName}'s Resume.pdf`
                    );
                })
                .catch((err) => {
                    console.log(err);
                });
        })
        .catch((err) => {
            console.log(err);
        });
};

 

let next=()=>{
    setStep(step+1)
   
}

let prev=()=>{
    setStep(step-1)
}


//PROFILE
function handleChangeFM(e){
    setFirstName(e.target.value)
}

function handleChangeLM(e){
    setLastName(e.target.value)
}

function handleChangeEmail(e){
    setEmail(e.target.value)
}

function handleChangePhone(e){
    setPhone(e.target.value)
}

function handleChangeWeb(e){
    setWebsite(e.target.value)
}

function handleChangeGit(e){
    setGithub(e.target.value)
}

function handleChangeLinked(e){
    setLinkedin(e.target.value)
}

//EDUCATION
function handleChangeSchool(e){
    setSchool(e.target.value)
}

function handleChangeRelCourse(e){
    setRelevantCoursework(e.target.value)
}

function handleChangeGradeM(e){
    setGraduationMonth(e.target.value)
}

function handleChangeGradeY(e){
    setGraduationYear(e.target.value)
}

//SKILLS
function handleChangeProgLang(e){
    setProgLanguages(e.target.value)
}

function handleChangeDatabase(e){
    setDatabase(e.target.value)
}

function handleChangeTools(e){
    setTools(e.target.value)
}

function handleChangeNatLang(e){
    setNaturalLanguages(e.target.value)
}

//PROJECTS
function handleChangeProjName(e){
    setProjectName(e.target.value)
}

function handleChangeGitHub(e){
    setGithubLink(e.target.value)
}

function handleChangeLiveLink(e){
    setLiveLink(e.target.value)
}

function handleChangeDescr(e){
    setDescription(e.target.value)
}

//WORK EXPERIENCE
function handleChangeCompany(e){
    setCompany(e.target.value)
}

function handleChangePosition(e){
    setPosition(e.target.value)
}

function handleChangeStartDate(e){
    setStartDate(e.target.value)
}

function handleChangeEndDate(e){
    setEndDate(e.target.value)
}

function handleChangeDescrWork(e){
    setDescriptionWork(e.target.value)
}


// const showData=()=>{
//     console.log(firstName)
// }




// const handleChange=(e)=>{
//     const value=e.target.value
//     setFirstName(e)
// }
function handleClickForward(e){
    e.preventDefault()
    next();

}

function handleClickBackward(e){
    e.preventDefault()
    prev();

}


switch(step){
    case 1:
    return (
        <div>
           <Profile 
           next={next}
           value={value}
          
           submit={submit}

           handleChangeDescr={handleChangeDescr}

           handleChangeFM={handleChangeFM}
           handleChangeLM={handleChangeLM}
           handleChangeEmail={handleChangeEmail}
           handleChangePhone={handleChangePhone}
           handleChangeWeb={handleChangeWeb}
           handleChangeGit={handleChangeGit}
           handleChangeLinked={handleChangeLinked}
           handleClickForward={handleClickForward}
           />
        </div>
    )
    case 2:
    return (
        <div>
            <Education  
            next={next}
            prev={prev}
            value={value}
            handleChangeSchool={handleChangeSchool}
            handleChangeRelCourse={handleChangeRelCourse}
            handleChangeGradeM={handleChangeGradeM}
            handleChangeGradeY={handleChangeGradeY}

           
             handleClickForward={handleClickForward}
            handleClickBackward={handleClickBackward}/>  
        </div>
        )

        case 3:
            return (
                <div>
                    <Skills  
                    next={next}
                    prev={prev}
                    value={value}
                    handleChangeProgLang={handleChangeProgLang}
                    handleChangeDatabase={handleChangeDatabase}
                    handleChangeTools={handleChangeTools}
                    handleChangeNatLang={handleChangeNatLang}

                     handleClickForward={handleClickForward}
                    handleClickBackward={handleClickBackward}/>  
                </div>
                )
    case 4:
    return (
        <div>
          <Projects 
          next={next}
          prev={prev}
          value={value}
          handleChangeProjName={handleChangeProjName}
          handleChangeGitHub={handleChangeGitHub}
          handleChangeLiveLink={handleChangeLiveLink}
          handleChangeDescr={handleChangeDescr}

          handleClickForward={handleClickForward}
          handleClickBackward={handleClickBackward}/>   
        </div>
    )
    case 5:
    return (
        <div>
           <Experience 
           next={next}
           prev={prev}
           value={value}
           submit={submit}
           handleChangeCompany={handleChangeCompany}
           handleChangePosition={handleChangePosition}
           handleChangeStartDate={handleChangeStartDate}
           handleChangeEndDate={handleChangeEndDate}
           handleChangeDescrWork={handleChangeDescrWork}


           handleClickForward={handleClickForward}
           handleClickBackward={handleClickBackward}
           download={download}/> 
              
        </div>
        )
    default:return <div/>
}
}

export default Resume
