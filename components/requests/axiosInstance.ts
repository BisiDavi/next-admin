import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        'content-type': 'application/json',
    },
});

export function setAuthToken(token) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export function getTokenValid() {
    const token = axiosInstance.defaults.headers.common['Authorization'];
    console.log('token', token);
    return token;
}

export function makeTokenInvalid() {
    axiosInstance.defaults.headers.common['Authorization'] = null;
    console.log(
        "axiosInstance.defaults.headers.common['Authorization']",
        axiosInstance.defaults.headers.common['Authorization'],
    );
}
