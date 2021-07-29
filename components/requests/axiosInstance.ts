import axios from 'axios';
import { toast } from 'react-toastify';

export const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        'content-type': 'application/json',
    },
});

export function setAuthToken(token) {
    console.log('token', token);
    return (axiosInstance.defaults.headers.common[
        'Authorization'
    ] = `Bearer ${token}`);
}

export function isTokenValid(_router) {
    const token = axiosInstance.defaults.headers.common['Authorization'];
    if (token === null) {
        toast.error('Please login');
        _router.push('/auth/login');
    }
}
