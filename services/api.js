import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://gozfobpyaqdqixobbohj.supabase.co/rest/v1/',
  headers: {
    apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvemZvYnB5YXFkcWl4b2Jib2hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk0NDI4OTUsImV4cCI6MjA0NTAxODg5NX0.Je_r9wIIKTuPEi7mFtXNF7fYyArHyLmTuyZnD8Uo7o4',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvemZvYnB5YXFkcWl4b2Jib2hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk0NDI4OTUsImV4cCI6MjA0NTAxODg5NX0.Je_r9wIIKTuPEi7mFtXNF7fYyArHyLmTuyZnD8Uo7o4',
  },
});
