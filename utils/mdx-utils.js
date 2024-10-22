
import { supabase } from '../services/api'

export const getPosts = async () => {
    
        
    let { data: posts, error } = await supabase
    .from('posts')
    .select('*')



    if(posts){
        return posts;
    }

    return []
}

export const getPostBySlug = async (id) => {

    //TODO: BUSCAR UM POST EM ESPECIFICO.
    
    let { data: posts, error } = await supabase
    .from('posts')
    .select("*")
    // Filters
    .eq('id', id)

    let teste = {posts}
    
    console.log(teste.posts[0].id)

    return {posts}
}
