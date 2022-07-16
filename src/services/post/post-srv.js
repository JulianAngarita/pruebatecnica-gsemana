import { axiosClient } from "../../config/axios";
import { getAppId } from "../../config/appId";

export const createPost = async (payload) => {
    getAppId();
    try {
        const response = await axiosClient.post('/post/create', payload);
        return response;
    } catch (error) {
        return({
            data: {
                status: false,
                result: 'Error al crear post'
            }
        })
    }
}

export const getPosts = async (payload) => {
    getAppId();
    try {
        const response = await axiosClient.get('/post');
        return response;
    } catch (error) {
        return({
            data: {
                status: false,
                result: 'Error al consultar post'
            }
        })
    }
}

export const getPostByTags = async (payload) => {
    getAppId();
    try {
        const response = await axiosClient.get(`/tag/:${payload}/post`);
        return response;
    } catch (error) {
        return({
            data: {
                status: false,
                result: 'Error al consultar post'
            }
        })
    }
}

