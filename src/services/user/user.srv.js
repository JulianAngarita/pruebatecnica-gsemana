import { axiosClient } from "../../config/axios";
import { getAppId } from "../../config/appId";

let userId = '';

export const setUserId = id => {
    console.log(id)
    userId = id
}

export const getUserId = () => {
    return userId
}

export const createUser = async(payload) => {
    getAppId();
    try {
        const response = await axiosClient.post('/user/create', payload);
        return response;
    } catch (error) {
        return({
            data: {
                status: false,
                result: 'Error al crear el usuario'
            }
        })
    }
}

