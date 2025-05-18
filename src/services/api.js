import axios from 'axios';

export const api = axios.create({
    baseURL:'https://beeuqnkcgjvswsnxfwby.supabase.co/rest/v1/',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlZXVxbmtjZ2p2c3dzbnhmd2J5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyNTE3MDcsImV4cCI6MjA2MjgyNzcwN30.9a45Dmzjdk4c53nyN1FThWsik_fT9ChLFH_kPtdbgwo",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlZXVxbmtjZ2p2c3dzbnhmd2J5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyNTE3MDcsImV4cCI6MjA2MjgyNzcwN30.9a45Dmzjdk4c53nyN1FThWsik_fT9ChLFH_kPtdbgwo"
    }

})