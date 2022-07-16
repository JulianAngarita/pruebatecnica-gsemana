import { axiosClient } from "../../config/axios";
import { getAppId } from "../../config/appId";

export const createUser = async(payload) => {
    getAppId();
    try {
        const response = await axiosClient.post('/user/create', payload);
        return response;
    } catch (error) {
        return({
            data: {
                status: false,
                result: 'Error al consultar'
            }
        })
    }
}