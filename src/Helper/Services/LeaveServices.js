import axios from 'axios';
import Helper from './../../Helper';
const LeaveServices = {
    list: () => {
        return axios.get(`leave`, {headers: {token: Helper.StorageService.getAccessToken()}});
    },
    add: (payload) => {
        return axios.post(`leave`, payload, {headers: {token: Helper.StorageService.getAccessToken()}});
    },
    edit: (payload,id) => {
        return axios.put(`leave/${id}`, payload, {headers: {token: Helper.StorageService.getAccessToken()}});
    },
    showOne: (id) => {
        return axios.get(`leave/${id}`, {headers: {token: Helper.StorageService.getAccessToken()}});
    },
    remove: (id) => {
        return axios.delete(`leave/${id}`, {headers: {token: Helper.StorageService.getAccessToken()}});
    },
   
};

export default LeaveServices;