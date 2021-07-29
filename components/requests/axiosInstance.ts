import axios from 'axios';
import { toast } from 'react-toastify';

export const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        'content-type': 'application/json',
        Authorization: 'Bearer ',
    },
});

export function setAuthToken(token) {
    return (axios.defaults.headers.common['Authorization'] = `Bearer ${token}`);
}

export function getTokenValid() {
    const token = axios.defaults.headers.common['Authorization'];
    console.log('token', token);
    return token;
}

export function makeTokenInvalid() {
    axios.defaults.headers.common['Authorization'] = null;
    console.log(
        "axiosInstance.defaults.headers.common['Authorization']",
        axios.defaults.headers.common['Authorization'],
    );
}

export function isLoggedIn(detailsFromStorage, router) {
    const token = getTokenValid();
    if (
        (token === undefined || token === null) &&
        detailsFromStorage === null
    ) {
        console.log('token', token);
        toast.error('Please login');
        router.push('/auth/login');
    }
}
