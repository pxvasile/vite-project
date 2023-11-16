import { request } from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/products';

export const getAll = async () => {
    const products = await request('GET', baseUrl);

    const result = Object.values(products);

    return result;
}