import { axiosClient } from "../../config/axios";
import { getAppId } from "../../config/appId";

export const getTags = async() => {
    getAppId();
    try {
        const response = await axiosClient.get('/tag');
        return response;
    } catch (error) {
        console.log(error)
        return({
            data: {
                status: false,
                result: 'Error al consultar '
            }
        })
    }
}