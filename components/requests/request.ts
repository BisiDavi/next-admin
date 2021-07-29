import { axiosInstance } from './axiosInstance';

export async function postRequest(route, data) {
    console.log('route', route);
    console.log('route', data);
    return await axiosInstance.post(route, data);
}
