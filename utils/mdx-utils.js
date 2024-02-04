import { api } from '../services/api'

export const getPosts = async () => {
    const { data } = await api.get('/post');

    if (data) {
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {
  console.log('getPostBySlug - ID:', id);
  try {
    const { data } = await api.get(`/post?id=eq.${id}`);

    console.log('getPostBySlug - Data:', data);

    if (!data || data.length === 0) {
        return null;
    }

    return data;
  } catch (error) {
    console.error(`Error fetching post with ID ${id}:`, error);
    return null; // Mudança aqui, retornar null em caso de erro
  }
}