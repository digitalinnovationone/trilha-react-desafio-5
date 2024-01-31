import { api } from '../services/api'

export const getPosts = async () => {
    const { data } = await api.get('/posts');

    if (data) {
        return data;
    }

    return []
}

export const getPostBySlug = async (slug) => {
    try {
        const { data } = await api.get(`/posts/{slug}`);
        console.log(slug)
        return data || {};
    } catch (error) {
        console.error(`Error fetching post with slug ${slug}:`, error);
        return {};
    }
};