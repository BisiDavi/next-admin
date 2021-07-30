import { axiosInstance } from './axiosInstance';

export async function postRequest(route, data) {
    console.log(
        'axios defaultHeader',
        axiosInstance.defaults.headers.common['Authorization'],
    );
    console.log('post request');
    return await axiosInstance.post(route, data);
}
