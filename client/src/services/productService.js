import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/products';

export const getAll = async () => {
    const result = await request.get(baseUrl);

    const products = Object.values(result);

    return products;
}

export const create = async (productData) => {
    const result = await request.post(baseUrl, productData);

    return result;
}