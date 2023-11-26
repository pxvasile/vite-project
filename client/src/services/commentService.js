import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return Object.values(result);
}

export const create = async (productId, username, text) => {
    const newComment = await request.post(baseUrl, {
        productId,
        username,
        text,
    });

    return newComment;
}