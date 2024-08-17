import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://yyhfavepdalzhbxblymv.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5aGZhdmVwZGFsemhieGJseW12Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE3MzIyNTEsImV4cCI6MjAzNzMwODI1MX0.GJQ9Tzc4NJUMAfaYKvXvpehLZovVWepuyjk7Js8u6Jc", 
        Authorization: " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5aGZhdmVwZGFsemhieGJseW12Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE3MzIyNTEsImV4cCI6MjAzNzMwODI1MX0.GJQ9Tzc4NJUMAfaYKvXvpehLZovVWepuyjk7Js8u6Jc"
    }
})