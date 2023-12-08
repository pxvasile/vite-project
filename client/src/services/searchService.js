import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/products';

export const getAll = async (values) => {

    const newValues = Object.values(values);
    const key = (JSON.stringify(newValues[0]));

    const query = encodeURIComponent(key);

    const result = await request.get(`${baseUrl}?where=productName LIKE ${query}`); 

    return result;
}