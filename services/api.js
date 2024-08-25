import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://vnbsgjeotkyrhwmzqap.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1bWtrd3luemF1d3pmbmdwcyIsInJvbGUiOiJhbmdlbCIscmVmZXIiOiJleGFtcGxlQGV4YW1wbGUuY29tIiwiaWF0IjoxNjY1NzQzMTY3LCJleHBpcmF0aW9uIjoxNjY2MzQ1MTY3fQ.3qFjv1Y8T9SujQZwytg7YbKkFzW6z_9R1Jr5zH2I_g",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1bWtrd3luemF1d3pmbmdwcyIsInJvbGUiOiJhbmdlbCIscmVmZXIiOiJleGFtcGxlQGV4YW1wbGUuY29tIiwiaWF0IjoxNjY1NzQzMTY3LCJleHBpcmF0aW9uIjoxNjY2MzQ1MTY3fQ.3qFjv1Y8T9SujQZwytg7YbKkFzW6z_9R1Jr5zH2I_g"
        
    }
})