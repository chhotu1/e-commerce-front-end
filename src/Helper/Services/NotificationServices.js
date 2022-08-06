import axios from 'axios';
import Helper from './../../Helper';
const NotificationServices = {
    list: () => {
        return axios.get(`notification`, {headers: {token: Helper.StorageService.getAccessToken()}});
    },
    add: (payload) => {
        return axios.post(`notification`, payload, {headers: {token: Helper.StorageService.getAccessToken()}});
    },
    edit: (payload,id) => {
        return axios.put(`notification/${id}`, payload, {headers: {token: Helper.StorageService.getAccessToken()}});
    },
    showOne: (id) => {
        return axios.get(`notification/${id}`, {headers: {token: Helper.StorageService.getAccessToken()}});
    },
    remove: (id) => {
        return axios.delete(`notification/${id}`, {headers: {token: Helper.StorageService.getAccessToken()}});
    },
   
};

export default NotificationServices;