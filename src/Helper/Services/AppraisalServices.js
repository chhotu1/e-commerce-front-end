import axios from 'axios';
import Helper from './../../Helper';
const AppraisalServices = {
    list: () => {
        return axios.get(`appraisals`, {headers: {token: Helper.StorageService.getAccessToken()}});
    },
    add: (payload) => {
        return axios.post(`appraisals`, payload, {headers: {token: Helper.StorageService.getAccessToken()}});
    },
    edit: (payload,id) => {
        return axios.put(`appraisals/${id}`, payload, {headers: {token: Helper.StorageService.getAccessToken()}});
    },
    showOne: (id) => {
        return axios.get(`appraisals/${id}`, {headers: {token: Helper.StorageService.getAccessToken()}});
    },
    remove: (id) => {
        return axios.delete(`appraisals/${id}`, {headers: {token: Helper.StorageService.getAccessToken()}});
    },
   
};

export default AppraisalServices;