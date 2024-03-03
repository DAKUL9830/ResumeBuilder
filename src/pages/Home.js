import React from 'react'
import DefaultLayout from "../components/DefaultLayout";
import {useNavigate} from 'react-router-dom';
import cvImage from './Dmitry_Akulau_CV.pdf'

function Home() {
    const navigate=useNavigate();
    const handleStartResume = () => {
        navigate('/profile');
      };
    return (
        <DefaultLayout>
         <div className='home-container'>
            <h1>Default template</h1>
            <div className="sample-cv">
            <img src={cvImage} alt="Sample CV" />
            </div>
            <button className="start-resume-btn" onClick={handleStartResume}>
        Start Resume
      </button>
         </div>
        </DefaultLayout>
    )
}

export default Home
