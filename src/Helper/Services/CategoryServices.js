import axios from 'axios';
import Helper from './../../Helper';

const CategoryServices = {
    list: () => {
        return axios.get(`categories`);
    },
    add: (payload) => {
        let data = CategoryServices.toFormData(payload);
        return axios.post(`categories`, data, {headers: {token: Helper.StorageService.getAccessToken(), 'Content-Type': 'multipart/form-data'}});
    },
    showOne: (id) => {
        return axios.get(`categories/${id}`);
    },
    remove: (id) => {
        return axios.delete(`categories/${id}`, {headers: {token:Helper.StorageService.getAccessToken()}});
    },
    toFormData: (payload) => {
        const formData = new FormData();
        for (let key in payload) {
            formData.append(key, payload[key]);
        }
        return formData;
    }
};

export default CategoryServices;