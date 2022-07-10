import axios from 'axios';

const UserServices = {
    list: (page = 1) => {
        return axios.get('/posts?page=' + page);
    },
    add: (payload) => {
        let data = UserServices.toFormData(payload);
        return axios.post('/posts', data, {headers: {Authorization: 'Bearer ' + localStorage.getItem("user.api_token"), 'Content-Type': 'multipart/form-data'}});
    },
    showOne: (id) => {
        return axios.get('/posts/' + id);
    },
    edit: (payload, id) => {
        let data = UserServices.toFormData(payload);
        data.append('_method', 'PUT');

        return axios.post('/posts/' + id, data, {headers: {Authorization: 'Bearer ' + localStorage.getItem("user.api_token"), 'Content-Type': 'multipart/form-data'}});
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

export default UserServices;