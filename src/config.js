import axios from 'axios';

export const axiosInst=axios.create({
    baseURL:"http://localhost:4000/",
})