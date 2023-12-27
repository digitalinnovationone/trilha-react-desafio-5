import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://loctfcwafubcdoxognux.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvY3RmY3dhZnViY2RveG9nbnV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2MjA3NzAsImV4cCI6MjAxOTE5Njc3MH0.rZuI3Cqeq-oPjNedqgbbR0d_wUSqR9zLekVFI_emtNI",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvY3RmY3dhZnViY2RveG9nbnV4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMzYyMDc3MCwiZXhwIjoyMDE5MTk2NzcwfQ.8s1zNSJvXLPyU2q-Z-HuXnWyVpM7PZgiPZMFeu24dgI"
    }
})