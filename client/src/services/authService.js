import * as request from '../services/requester';

const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) => {
    const result = await request.post(`${baseUrl}/login`, {
        email,
        password,
    });

    return result;
}

export const logout = async () => {
    await request.get(`${baseUrl}/logout`);
}

export const register = async (username, email, password) => {
    const result = await request.post(`${baseUrl}/register`, {
        username,
        email,
        password,
    });

    return result;
}