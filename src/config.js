// import axios from 'axios';

// export const axiosInst=axios.create({
//     baseURL:"http://localhost:4000/",
// })

// config.js
const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://resumebuilder-bhq9.onrender.com" 
    : "http://localhost:4000";

export default API_BASE_URL;
