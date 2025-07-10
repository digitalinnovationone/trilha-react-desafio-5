import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 

    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {

  const { data, error } = await supabase
    .from('post')
    .select('*')
    .eq('id', id)
    .single(); 

  if (error) {
    console.error('Erro ao buscar post:', error);
    return null;
  }

  return data;
}

