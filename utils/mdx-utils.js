import { api } from '../services/api';

export const getPosts = async () => {
    const {data} = await api.get('/posts');

    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {

    //TODO: BUSCAR UM POST EM ESPECIFICO.
//     const {data} = await api.get(`/post?id=eq.${id}`);
    

//     return {data}
// 
try {
    const { data } = await api.get(`/posts?id=eq.${id}`);

    if (data && data.length > 0) {
        // Se houver dados, retorne o primeiro item encontrado (supondo que o ID seja único)
        return data[0];
    } else {
        // Se nenhum post for encontrado com o ID fornecido
        return null;
    }
} catch (error) {
    // Tratar erros, como conexão perdida, etc.
    console.error('Erro ao buscar o post por ID:', error);
    throw error;
}

}