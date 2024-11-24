// utils/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ejhicwomoulkriutmhwi.supabase.co'; // Substitua pelo URL do seu Supabase
const supabaseKey = 'your-supabase-key'; // Substitua pela sua chave API
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
