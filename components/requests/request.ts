import { axiosInstance } from './axiosInstance';

export async function postRequest(route, data) {
    return await axiosInstance.post(route, data);
}

export async function getRequest(route) {
    return await axiosInstance.get(route);
}
