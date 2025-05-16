import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://ntcbxjewzhlpspgoawrq.supabase.co/rest/v1/',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50Y2J4amV3emhscHNwZ29hd3JxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0MDUwMzksImV4cCI6MjA2Mjk4MTAzOX0.sk8QwdfqQ_0vnP_7iI0ukOefIk37pXa_LM-bCQQ-bVY",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50Y2J4amV3emhscHNwZ29hd3JxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0MDUwMzksImV4cCI6MjA2Mjk4MTAzOX0.sk8QwdfqQ_0vnP_7iI0ukOefIk37pXa_LM-bCQQ-bVY"
    }
});