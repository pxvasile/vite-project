import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/products';

export const getAll = async (values) => {
    // const query = new URLSearchParams({
    //     where: `productId="${productId}"`,
    //     // load: `owner=_ownerId:users`
    // })

    const newValues = Object.values(values);
    const key = (JSON.stringify(newValues[0]));
    const query = encodeURIComponent(`where=${key}`)

    const result = await request.get(`${baseUrl}?${query}`); 

    const final = result.find(x => x.productName !== key);

    return final;
}