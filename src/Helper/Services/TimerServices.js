import axios from 'axios';
import Helper from './../../Helper';
const TimerServices = {
    list: () => {
        return axios.get(`timer`, {headers: {token: Helper.StorageService.getAccessToken()}});
    },
    add: (payload) => {
        return axios.post(`timer`, payload, {headers: {token: Helper.StorageService.getAccessToken()}});
    },
    edit: (payload,id) => {
        return axios.put(`timer/${id}`, payload, {headers: {token: Helper.StorageService.getAccessToken()}});
    },
    showOne: (id) => {
        return axios.get(`timer/${id}`, {headers: {token: Helper.StorageService.getAccessToken()}});
    },
    latestTimer: () => {
        return axios.get(`latest-timer`, {headers: {token: Helper.StorageService.getAccessToken()}});
    },
    remove: (id) => {
        return axios.delete(`timer/${id}`, {headers: {token: Helper.StorageService.getAccessToken()}});
    },
   
};

export default TimerServices;