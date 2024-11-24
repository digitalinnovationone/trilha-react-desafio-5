import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://ejhicwomoulkriutmhwi.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqaGljd29tb3Vsa3JpdXRtaHdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ4Njg3MjEsImV4cCI6MjA0MDQ0NDcyMX0.8YbNKmYMj_obqE9m6yBaoPw6mJ0nHqWfG5M3PT0mX0U",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqaGljd29tb3Vsa3JpdXRtaHdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ4Njg3MjEsImV4cCI6MjA0MDQ0NDcyMX0.8YbNKmYMj_obqE9m6yBaoPw6mJ0nHqWfG5M3PT0mX0U"
    }
})