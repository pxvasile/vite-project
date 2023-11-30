import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/comments';

export const getAll = async (productId) => {
    const query = new URLSearchParams({
        where: `productId="${productId}"`,
        load: `owner=_ownerId:users`
    })
    const result = await request.get(`${baseUrl}?${query}`);    

    // return result.filter(comment => comment.productId === productId)
    return result;
}

export const create = async ({ productId, username, comment }) => {
    const newComment = await request.post(baseUrl, {
        productId,
        username,
        comment,
    });

    return newComment;
}