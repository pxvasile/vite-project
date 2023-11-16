import { request } from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/games';

export const getAll = () => {
    const products = request('GET', baseUrl);

    return products;
}