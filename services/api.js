import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://eewkwnyrcutvzbngpsam.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVld2t3bnlyY3V0dnpibmdwc2FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY2MzIyMDUsImV4cCI6MjAyMjIwODIwNX0.ZkPlledIYiVkYgQWnBw1shQ5wim-R_CVqsDbMvm7SaA",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVld2t3bnlyY3V0dnpibmdwc2FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY2MzIyMDUsImV4cCI6MjAyMjIwODIwNX0.ZkPlledIYiVkYgQWnBw1shQ5wim-R_CVqsDbMvm7SaA"
    }
})