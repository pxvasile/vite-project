import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/products';

export const getAll = async () => {
    const products = await request.get(baseUrl);

    const result = Object.values(products);

    return result;
}

export const create = async (productData) => {
    const result = await request.post(baseUrl, productData);

    return result;
}