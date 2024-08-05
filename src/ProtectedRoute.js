import React from 'react';
import { Navigate } from 'react-router-dom';
const ProtectedRoute=({children})=>{
    // const user = JSON.parse(localStorage.getItem('resumebuilder'));
    // if(!user){
    //     return <Navigate to="/login"/>;
    // }
    // return children;
    const isAuthenticated = localStorage.getItem('resumebuilder') !== null;
    return isAuthenticated ? children : <Navigate to="/login" />;
}
export default ProtectedRoute;