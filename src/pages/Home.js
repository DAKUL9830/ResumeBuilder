import React from 'react';
import {Worker,Viewer} from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import DefaultLayout from "../components/DefaultLayout";
import {useNavigate} from 'react-router-dom';
import cvImage from './Dmitry_Akulau_CV.pdf';
import '../resources/defaultlayout.css';
import '../resources/home.css';

function Home() {
    const navigate=useNavigate();
    const handleStartResume = () => {
        navigate('/profile');
      };
    return (
        <DefaultLayout>
         <div className='home-container'>
            <h1>Default template</h1>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="sample-cv">
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                        <Viewer fileUrl={cvImage} />
                    </Worker>
            </div>
            <button className="start-resume-btn" onClick={handleStartResume}> 
        Start Resume
      </button>
         </div>
        </DefaultLayout>
    )
}

export default Home




