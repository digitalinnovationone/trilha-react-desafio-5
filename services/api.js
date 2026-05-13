import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://apbrwcinmvgbwmozchcf.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwYnJ3Y2lubXZnYndtb3pjaGNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg2MDIwNTEsImV4cCI6MjA5NDE3ODA1MX0.fmTR_VCCHnP0Ice6JZMZkSUKPhjicfL3fM6xe1vUsHE",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwYnJ3Y2lubXZnYndtb3pjaGNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg2MDIwNTEsImV4cCI6MjA5NDE3ODA1MX0.fmTR_VCCHnP0Ice6JZMZkSUKPhjicfL3fM6xe1vUsHE"
}})