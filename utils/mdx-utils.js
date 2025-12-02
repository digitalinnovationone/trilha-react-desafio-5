import { api } from '../services/api'


export const getPosts = async () => {
    const { data } = await api.get('/posts');
    return data || [];
}

export const getPostBySlug = async (id) => {
    // Busca um post específico pelo id no JSON Server
    try {
        const { data } = await api.get(`/posts/${id}`);
        return data || {};
    } catch (e) {
        return {};
    }
}