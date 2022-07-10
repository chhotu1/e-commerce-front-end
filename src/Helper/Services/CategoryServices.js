import axios from 'axios';

const CategoryServices = {
    list: (page = 1) => {
        return axios.get('/posts?page=' + page);
    },
    add: (payload) => {
        let data = CategoryServices.toFormData(payload);
        return axios.post('/posts', data, {headers: {Authorization: 'Bearer ' + localStorage.getItem("user.api_token"), 'Content-Type': 'multipart/form-data'}});
    },
    showOne: (id) => {
        return axios.get('/posts/' + id);
    },
    remove: (id) => {
        return axios.delete('/posts/' + id, {headers: {Authorization: 'Bearer ' + localStorage.getItem("user.api_token")}});
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