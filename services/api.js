import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://nuareafrukmnjnaakplk.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51YXJlYWZydWttbmpuYWFrcGxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjAyMjc0MjEsImV4cCI6MTk3NTgwMzQyMX0.3qUEldVsmcr_yrpf8N1-qBGdHLB1QCy9nB6-nApVQIA",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51YXJlYWZydWttbmpuYWFrcGxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjAyMjc0MjEsImV4cCI6MTk3NTgwMzQyMX0.3qUEldVsmcr_yrpf8N1-qBGdHLB1QCy9nB6-nApVQIA"
    }
})