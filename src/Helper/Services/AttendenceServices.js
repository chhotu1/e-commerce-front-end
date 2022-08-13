import axios from 'axios';
import Helper from './../../Helper';
const AttendenceServices = {
    list: () => {
        return axios.get(`attendence`, {headers: {token: Helper.StorageService.getAccessToken()}});
    },
    add: (payload) => {
        return axios.post(`attendence`, payload, {headers: {token: Helper.StorageService.getAccessToken()}});
    },
    edit: (payload,id) => {
        return axios.put(`attendence/${id}`, payload, {headers: {token: Helper.StorageService.getAccessToken()}});
    },
    showOne: (id) => {
        return axios.get(`attendence/${id}`, {headers: {token: Helper.StorageService.getAccessToken()}});
    },
    remove: (id) => {
        return axios.delete(`attendence/${id}`, {headers: {token: Helper.StorageService.getAccessToken()}});
    },
};

export default AttendenceServices;