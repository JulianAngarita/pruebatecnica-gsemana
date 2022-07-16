import axios from 'axios';

export const axiosClient = axios.create({
    baseUrl: 'https://dummyapi.io/data/v1/'
})