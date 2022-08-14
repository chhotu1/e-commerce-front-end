import axios from 'axios';
import Helper from './../../Helper';
const HolidaysServices = {
    list: () => {
        return axios.get(`holidays`, {headers: {token: Helper.StorageService.getAccessToken()}});
    },
    add: (payload) => {
        return axios.post(`holidays`, payload, {headers: {token: Helper.StorageService.getAccessToken()}});
    },
    edit: (payload,id) => {
        return axios.put(`holidays/${id}`, payload, {headers: {token: Helper.StorageService.getAccessToken()}});
    },
    showOne: (id) => {
        return axios.get(`holidays/${id}`, {headers: {token: Helper.StorageService.getAccessToken()}});
    },
    remove: (id) => {
        return axios.delete(`holidays/${id}`, {headers: {token: Helper.StorageService.getAccessToken()}});
    },
   
};

export default HolidaysServices;