import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export const getAll = async (productId) => {
    const query = new URLSearchParams({
        where: `productId="${productId}"`
    })
    const result = await request.get(`${baseUrl}?${query}`);

    return Object.values(result).filter(comment => comment.productId === productId);
}

export const create = async (productId, username, text) => {
    const newComment = await request.post(baseUrl, {
        productId,
        username,
        text,
    });

    return newComment;
}