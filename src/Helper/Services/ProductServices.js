import axios from 'axios';
import Helper from './../../Helper';
const ProductServices = {
    list: () => {
        return axios.get(`product`);
    },
    add: (payload) => {
        let data = ProductServices.toFormData(payload);
        return axios.post(`product`, data, {headers: {token: Helper.StorageService.getAccessToken(), 'Content-Type': 'multipart/form-data'}});
    },
    showOne: (id) => {
        return axios.get(`product/${id}`);
    },
    remove: (id) => {
        return axios.delete(`product/${id}`, {headers: {token:Helper.StorageService.getAccessToken()}});
    },
    toFormData: (payload) => {
        const formData = new FormData();
        for (let key in payload) {
            formData.append(key, payload[key]);
        }
        return formData;
    }
};

export default ProductServices;