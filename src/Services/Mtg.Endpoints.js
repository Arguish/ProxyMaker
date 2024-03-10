import { mtgApi } from './Mtg.Config.js';

export const getAll = async (params) => {
    const response = await mtgApi.get('/cards');
    return response;
};

export const findById = async (id) => {
    return await mtgApi.get(`/cards/${id}`);
};

export const findBy = async (params) => {
    let fisrt = true;
    let paramUrl = '?';
    for (const [key, value] of Object.entries(params)) {
        if (!fisrt) {
            paramUrl = paramUrl.concat(`&`);
        }
        paramUrl = paramUrl.concat(`${key}=${value}`);
        console.log(`${key}: ${value}`);
        console.log(paramUrl);
        fisrt = false;
    }
    return await mtgApi.get(`/cards${paramUrl}`);
};

export const getTypes = async () => {
    return await mtgApi.get(`/types`);
};
export const getSubTypes = async () => {
    return await mtgApi.get(`/subtypes`);
};
export const getSuperTypes = async () => {
    return await mtgApi.get(`/supertypes`);
};
export const getFormats = async () => {
    return await mtgApi.get(`/formats`);
};
