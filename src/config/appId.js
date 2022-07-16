import {axiosClient} from './axios';
import envVariables from './env-variables';

export const getAppId = () => {
    axiosClient.defaults.headers.common['app-id'] = envVariables.appId;
}