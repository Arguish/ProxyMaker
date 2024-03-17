import axios from 'axios';

export const mtgApi = axios.create({
    baseURL: 'https://api.scryfall.com/',
});
