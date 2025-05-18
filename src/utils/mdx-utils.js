import { api } from '../services/api';

export const getPosts = async () => {
  // Faz uma requisição GET para /posts (que será resolvida para SEU_URL_DO_SUPABASE/rest/v1/posts)
  // O Supabase retornará todos os registros da tabela 'posts'.
  const { data } = await api.get('/posts'); 

  if (data) {
    // Você pode formatar a data aqui se sua coluna 'created_at' no Supabase for um timestamp
    return data.map(post => ({
        ...post,
        created_at: post.created_at ? new Date(post.created_at).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' }) : null,
        // Adicione um 'slug' se você o tiver, ou use o ID para a URL
        slug: post.slug || post.id,
    }));
  }
  return [];
};

export const getPostBySlug = async (id) => {
  // Faz uma requisição GET para /posts?id=eq.${id}
  // O Supabase filtra os posts onde a coluna 'id' é igual ao valor fornecido.
  const {data} = await api.get(`/posts?id=eq.${id}`); 

  if (data && data.length > 0) {
    // Retorna o primeiro item encontrado, pois esperamos apenas um.
    // Formate a data e adicione o 'slug' aqui também se necessário para a página de post individual.
    const post = data[0];
    return {
        ...post,
        created_at: post.created_at ? new Date(post.created_at).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' }) : null,
    };
  } 
  return null;
}
