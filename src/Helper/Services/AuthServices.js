import axios from "axios";
const AuthServices = {
    login: (payload) => {
        return axios.post('login', payload);
    },
    register:(payload)=>{
        return axios.post('register',payload);
    }
};

export default AuthServices;
