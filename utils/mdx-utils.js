import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 

    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {

    //TODO: BUSCAR UM POST EM ESPECIFICO.
    //const {data} = await api.get(`/post?id=eq.${id}`)
    try {
        const { data } = await api.get(`/posts?id=eq.${id}`); // Ajuste aqui para usar 'slug' na query

        if (data && data.length > 0) {
            return data[0];
        }

        return null; 
    } catch (error) {
        console.error("Erro ao buscar o post:", error);
        return null;
    }
}
    return {}
