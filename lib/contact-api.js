//@lib/contact-api.js
import {axiosApiClient} from './api';

export const contactApi = {
    create: (data) => {
        return axiosApiClient.post('/users/contact', data);
    }
};
    