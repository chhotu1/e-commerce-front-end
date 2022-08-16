
import axios from 'axios';
import Helper from './../../Helper';
const DashboardServices = {
    dashboard: () => {
        return axios.get(`dashboard`, {headers: {token: Helper.StorageService.getAccessToken()}});
    },
};

export default DashboardServices;