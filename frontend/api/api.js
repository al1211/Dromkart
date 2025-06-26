import axios from "axios";

const API=axios.create({
    baseURL:"http://localhost:8000"
});

export const register=(data)=>API.post("/user/singup",data);
export const loginUser=(data)=>API.post("/user/login",data);