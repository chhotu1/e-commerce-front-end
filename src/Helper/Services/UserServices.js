import axios from 'axios';
import Helper from './../../Helper';
const UserServices = {
    list: () => {
        return axios.get(`user`, {headers: {token: Helper.StorageService.getAccessToken()}});
    },
    add: (payload) => {
        let data = UserServices.toFormData(payload);
        return axios.post(`register`, data, {headers: {token: Helper.StorageService.getAccessToken(), 'Content-Type': 'multipart/form-data'}});
    },
    edit: (payload,id) => {
        // let data = UserServices.toFormData(payload);
        // data.append('_method', 'PUT');
        return axios.put(`user/${id}`, payload, {headers: {token: Helper.StorageService.getAccessToken(), 'Content-Type': 'multipart/form-data'}});
    },
    showOne: (id) => {
        return axios.get(`user/${id}`, {headers: {token: Helper.StorageService.getAccessToken()}});
    },
    remove: (id) => {
        return axios.delete(`user/${id}`, {headers: {token: Helper.StorageService.getAccessToken()}});
    },

    toFormData: (payload) => {
        const formData = new FormData();
        for (let key in payload) {
            formData.append(key, payload[key]);
        }
        return formData;
    }
};

export default UserServices;