import axios from 'axios';
import envVariables from './env-variables';

export const axiosClient = axios.create({
    baseURL: envVariables.baseUrl
})