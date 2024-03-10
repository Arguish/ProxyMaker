import axios from 'axios';

export const mtgApi = axios.create({
    baseURL: 'https://api.magicthegathering.io/v1',
});
